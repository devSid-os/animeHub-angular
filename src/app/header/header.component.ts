import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMobileMenuOpen: boolean = false;
  isSmallScreen;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    console.log(screenWidth)
    this.isSmallScreen = screenWidth < 640; // For example, use 768px as the breakpoint

    // Automatically show background if screen is large
    if (!this.isSmallScreen) {
      this.isMobileMenuOpen = false;
    }
  }

  ngOnInit(): void {
  }

}
