import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[checkOverflow]'
})
export class CheckOverflowDirective implements AfterViewInit {
  readMoreButton: HTMLButtonElement | null = null;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    setTimeout(() => {
      const element = this.el.nativeElement.firstChild;
      const hasOverflow = element.scrollHeight > element.clientHeight;

      if (hasOverflow) {
        this.renderer.addClass(element, 'blur-bottom');
        const readMoreBtn = this.renderer.createElement("button");
        const readMoreBtnTxt = this.renderer.createText("Read More");
        this.renderer.setAttribute(readMoreBtn, 'type', 'button');
        this.renderer.addClass(readMoreBtn, 'font-mulish');
        this.renderer.addClass(readMoreBtn, 'text-[#aabee4]');
        this.renderer.appendChild(readMoreBtn, readMoreBtnTxt);
        this.renderer.listen(readMoreBtn, 'click', () => this.toggleReadMore());
        this.renderer.appendChild(this.el.nativeElement, readMoreBtn);
        this.readMoreButton = readMoreBtn;
      } else {
        this.renderer.removeClass(element, 'blur-bottom');
      }
    }, 100)
  }

  toggleReadMore() {
    const element = this.el.nativeElement.firstChild;
    if (element.classList.contains('blur-bottom')) {
      this.renderer.removeClass(element, 'blur-bottom');
      this.renderer.removeClass(element, 'max-h-[208px]');
      this.readMoreButton!.innerText = 'Read Less';
    }
    else {
      this.renderer.addClass(element, 'blur-bottom');
      this.renderer.addClass(element, 'max-h-[208px]');
      this.readMoreButton!.innerText = 'Read More';
    }
  }
}
