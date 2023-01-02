import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';
import { HostListenerComponent } from '../components/host-listener/host-listener.component';

@Directive({
  selector: '[appHostBindingHighlight]',
})
export class HostBindingHighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') background: string = 'yellow';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') mouseenter() {
    this.background = 'pink';
    this.border = 'black 2px solid';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'orange';
    this.border = 'none';
  }
}
