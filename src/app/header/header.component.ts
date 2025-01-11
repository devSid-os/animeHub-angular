import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from '../Services/anime.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showAnimeSearch: boolean = false;
  isMobileMenuOpen: boolean = false;
  isSmallScreen: boolean = false;
  headerMenuItems: Array<any> = [
    {
      name: 'home',
      urlRoute: '/',

    },
    {
      name: 'characters',
      urlRoute: '/all-characters',

    },
    {
      name: 'manga',
      urlRoute: '/manga',

    },
    {
      name: 'movies',
      urlRoute: '/movies',

    }
  ]
  sub1$: Subscription | null = null;

  constructor(private _animeService: AnimeService, private _router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = window.innerWidth;
    this.isSmallScreen = screenWidth < 640; // For example, use 768px as the breakpoint

    // Automatically show background if screen is large
    if (!this.isSmallScreen) {
      this.isMobileMenuOpen = false;
    }
  }

  ngOnInit(): void {
    this.sub1$ = this._animeService.showAnimeSearch
      .subscribe({
        next: (value: boolean) => {
          this.showAnimeSearch = value;
        },
        error: (error: any) => {
          console.log("Error: ", error);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.sub1$ instanceof Subscription) this.sub1$.unsubscribe();
  }

  redirectToSearchPage(searchVal: string = ''): void {
    this._router.navigate(["/anime-search"], {
      queryParams: { query: searchVal }
    });
  }

}
