import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactInfo = [
    {
      title: 'Email',
      value: 'abdo@example.com',
      link: 'mailto:abdo@example.com',
      icon: 'assets/email-icon.png',
      description: 'Send me an email for business inquiries'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      icon: 'assets/phone-icon.png',
      description: 'Call me for urgent matters'
    },
    {
      title: 'Location',
      value: 'Your City, Country',
      link: 'https://maps.google.com',
      icon: 'assets/location-icon.png',
      description: 'Available for local meetups'
    },
    {
      title: 'Resume',
      value: 'Download CV',
      link: 'assets/abdo-cv.pdf',
      icon: 'assets/resume-icon.png',
      description: 'Download my latest resume'
    }
  ];

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.contactForm);
    
    // Here you can add email service integration
    // For now, we'll just show an alert
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}