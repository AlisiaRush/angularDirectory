import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListenerHover]',
})
export class HostListenerHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
  @HostListener('mouseleave') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, 'margin', '0px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '15px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}
