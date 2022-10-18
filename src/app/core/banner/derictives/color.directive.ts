import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class ColorDirective {

  @Input('appStyle') color: string = '#fff'

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click', ['$event.target']) onClick(event: Element) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color)
    console.log(this.color)
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#000')
  }
}
