import { Directive, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[loaderDots]'
})
export class loaderAnimation implements AfterViewInit, OnDestroy {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  interval: any = null;
  ngAfterViewInit() {

    this.interval = setInterval(() => {
      if (this.el.nativeElement.textContent.length < 3) {
        this.renderer.appendChild(this.el.nativeElement, this.renderer.createText('.'));
      }
      else this.renderer.setProperty(this.el.nativeElement, 'textContent', '');
    }, 500)

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
