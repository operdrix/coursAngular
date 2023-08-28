import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TaskStatus } from './model/Task.model';
import { style } from '@angular/animations';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective implements OnInit {

  @Input('appStatusColor') status!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    switch (this.status) {
      case TaskStatus.EN_COURS:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
        break;
      case TaskStatus.A_FAIRE:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red')
        break;
      case TaskStatus.TERMINEE:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green')
        break;
      default:
        this.renderer.setStyle(this.el.nativeElement, 'color', 'black')
        break;
    }
  }
}
