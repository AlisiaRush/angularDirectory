import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]',
})
export class RenderHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'red'
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'This is example of setAttribute'
    );
  }
}
