import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  
  readonly currentYear: number = new Date().getFullYear();
  copyRightText = this.currentYear.toString() + ` All rights reserved. | 🎨 Designed & 💻 Developed by Siddharth | 🔗`;
  @ViewChild('jikanImg') jikanImg: ElementRef<any>;
  constructor() { }

  navLinks = [
    {name: 'Home', url: '/'},
    {name: 'Characters', url: '/all-characters'},
    {name: 'Manga', url: '/manga'},
    {name: 'Movies', url: '/movies'},
    {name: 'Search Anime', url: '/anime-search'},
  ]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.jikanImg.nativeElement, 'click')
      .subscribe((obs) => {
        window.open('https://jikan.moe/', '_blank');
      })
  }
}
