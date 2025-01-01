import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef;

  images = [
    { src: 'assets/carousel_img1.jpg', alt: 'Image 1', url: '/manga/156308' },
    { src: 'assets/carousel_img2.jpg', alt: 'Image 2' },
    { src: 'assets/carousel_img3.jpg', alt: 'Image 3', url: '/manga/13' },
    { src: 'assets/carousel_img4.jpg', alt: 'Image 4', url: 'https://en.dragon-ball-official.com/specials/dragonball40th/?utm_source=dbos&utm_medium=di[%E2%80%A6]ampaign=dragonball40th_open&utm_content=banner_20241120' }
  ];

  currentIndex = 0;
  autoScrollInterval: any;
  autoScrollDelay = 4000;
  isSmallScreen: boolean = false;

  constructor(private renderer: Renderer2, private _router: Router) { }

  onResize() {
    this.isSmallScreen = window.innerWidth <= 768;
    this.currentIndex = 0;
    this.scrollToIndex(0);
  }

  ngOnInit(): void {
    this.currentIndex = 0;
    setTimeout(() => {
      this.isSmallScreen = window.innerWidth <= 768;
      this.startAutoSlide();
      this.renderer.listen('window', 'resize', this.onResize.bind(this));
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
    // Remove the HostListener events manually
    this.renderer.listen('window', 'resize', () => { }); // This removes the event listener
    this.removeEventListeners();
  }

  redirectToPage(index: Number, url: string): void {
    switch (index) {
      case 0:
        this._router.navigate([url]);
        break;
      case 2:
        this._router.navigate([url]);
        break;
      default:
        window.open(url, '_blank');
    }
  }

  removeEventListeners() {
    const carouselElement = this.carousel.nativeElement;
    this.renderer.listen(carouselElement, 'scroll', null);  // Replace 'scroll' with the event you're using
  }

  onNavigationClick(btnNo: number): void {
    if (btnNo === this.currentIndex) return;
    if (!this.isSmallScreen) {
      if (btnNo === 0) {
        this.currentIndex = 0;
      }
      else this.currentIndex = 2;
    }
    else this.currentIndex = btnNo;
    clearInterval(this.autoScrollInterval);
    this.startAutoSlide();
    this.scrollToIndex(this.currentIndex);
  }

  scrollToIndex(index: number) {
    if (index < 0 || index >= this.images.length) {
      return;
    }

    this.currentIndex = index;
    const carouselElement = this.carousel.nativeElement;
    const targetItem = carouselElement.querySelector(`#carousel-item-${index}`);
    if (targetItem) {
      const scrollPosition = targetItem.offsetLeft;
      carouselElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }

  startAutoSlide() {
    this.autoScrollInterval = setInterval(() => {
      this.autoSlide();
    }, this.autoScrollDelay);
  }

  stopAutoSlide() {
    clearInterval(this.autoScrollInterval);
  }

  autoSlide() {
    let nextIndex: number = 0;
    if (this.isSmallScreen) nextIndex = this.currentIndex + 1;
    else nextIndex = this.currentIndex + 2;
    if (nextIndex >= this.images.length) {
      nextIndex = 0;
    }
    this.scrollToIndex(nextIndex);
  }
}