import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

/*
J'ai utilisé keydown car je n'ai pas vu comment faire avec click.
Je ne sais pas si vous proposez des corrections type, mais j'aimerais bien connaitre la solution.
*/

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  constructor(private elt: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:keydown', ['$event']) windowKeyDown($event) {
    switch ($event.key) {
      case 'ArrowUp':
        this.renderer.setStyle(this.elt.nativeElement, 'color', 'red');
        break;
      case 'ArrowDown':
        this.renderer.setStyle(this.elt.nativeElement, 'color', 'blue');
        break;
      case 'ArrowLeft':
        this.renderer.setStyle(this.elt.nativeElement, 'color', 'green');
        break;
      case 'ArrowRight':
        this.renderer.setStyle(this.elt.nativeElement, 'color', 'orange');
        break;
      default:
        this.renderer.setStyle(this.elt.nativeElement, 'color', 'black');
    }
  }
}
