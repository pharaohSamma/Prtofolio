import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      alert(`Message sent! \nName: ${this.name} \nEmail: ${this.email} \nMessage: ${this.message}`);
      // You can replace this with an actual email service or API request.
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill in all fields.');
    }
  }
}
