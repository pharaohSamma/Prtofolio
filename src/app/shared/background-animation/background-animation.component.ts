import { Component, AfterViewInit, HostListener, ElementRef, ViewChild, OnDestroy } from '@angular/core';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  value: string;
}

@Component({
  selector: 'app-background-animation',
  template: `<canvas #canvas id="interactive-bg"></canvas>`,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    #interactive-bg {
      width: 100%;
      height: 100%;
    }
  `]
})
export class BackgroundAnimationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private nodes: Node[] = [];
  private animationId: number = 0;

  private readonly NODE_COUNT = 100;
  private readonly NODE_SIZE = 16; // Font size of binary numbers
  private readonly PRIMARY_COLOR = '#00FF00'; // Green text
  private readonly BACKGROUND_COLOR = '#000000'; // Black background

  constructor() {}

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.initializeCanvas();
    this.createNodes();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  @HostListener('window:resize')
  initializeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    if (this.nodes.length > 0) {
      this.createNodes();
    }
  }

  private createNodes(): void {
    this.nodes = [];
    for (let i = 0; i < this.NODE_COUNT; i++) {
      const node: Node = {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        value: Math.random() > 0.5 ? '1' : '0'
      };
      this.nodes.push(node);
    }
  }

  private animate = (): void => {
    this.ctx.fillStyle = this.BACKGROUND_COLOR;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = this.PRIMARY_COLOR;
    this.ctx.font = `${this.NODE_SIZE}px monospace`;

    for (const node of this.nodes) {
      node.x += node.vx;
      node.y += node.vy;
      
      if (node.x <= 0 || node.x >= this.canvas.width) {
        node.vx *= -1;
      }
      if (node.y <= 0 || node.y >= this.canvas.height) {
        node.vy *= -1;
      }
      
      this.ctx.fillText(node.value, node.x, node.y);
    }
    
    this.animationId = requestAnimationFrame(this.animate);
  };
}
