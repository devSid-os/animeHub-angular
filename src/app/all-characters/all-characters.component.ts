import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AnimeService } from '../Services/anime.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {

  constructor(private _animeService: AnimeService, private _renderer2: Renderer2) { }
  @ViewChild('modal') modal: ElementRef<any>;

  isModalOpen: boolean = false;
  loading: boolean = false;
  characters: Array<any> = [];
  characterListPagination: any = null;
  searchQuery: string = '';
  searchInterval: any = null;
  commonCharactersData: Array<any> = [];
  commonCharactersListPagination: any = null;
  modalData: any = null;

  ngOnInit(): void {
    this.getCharactersList({ order_by: 'favorites', sort: 'desc', page: 1, limit: 24 });
  }

  openModal(data: any): void {
    this.modalData = data;
    this.modalData.about = this.modalData.about.replace(/\n{2,}/g, '<br />');
    this.modalData.about = this.modalData.about.replace(/\n/g, "<br />");
    this.isModalOpen = true;
    setTimeout(() => {
      this._renderer2.setStyle(this.modal.nativeElement, 'transform', 'scale(1)');
    }, 1)
  }

  closeModal(): void {
    this._renderer2.setStyle(this.modal.nativeElement, 'transform', 'scale(0)');
    setTimeout(() => {
      this.isModalOpen = false;
      this.modalData = null;
    }, 150);
  }

  getMoreCharacters(): void {
    if (!this.searchQuery.length)
      this.getCharactersList({ order_by: 'favorites', sort: 'desc', page: (this.characterListPagination.current_page + 1), limit: 24 });
    else {
      this.getCharactersList({ q: this.searchQuery, limit: 24, page: (this.characterListPagination.current_page + 1) }, true);
    }
  }

  searchCharacters(event: any): void {
    this.searchQuery = event.target.value;
    if (this.searchQuery.length) {
      clearTimeout(this.searchInterval)
      this.searchInterval = setTimeout(() => {
        this.getCharactersList({ q: this.searchQuery, limit: 24 }, true);
      }, 500);
    }
    else {
      this.characters = this.commonCharactersData;
      this.characterListPagination = this.commonCharactersListPagination;
    }
  }

  clearSearchQuery() {
    this.searchQuery = '';
    this.characters = this.commonCharactersData;
    this.characterListPagination = this.commonCharactersListPagination;
  }

  getCharactersList(filters: any, isSearched: boolean = false): void {
    this.loading = true;
    this._animeService.getAllCharacters(filters)
      .then((response: any) => {
        if (!isSearched) {
          this.commonCharactersData = this.commonCharactersData.concat(response.data);
          this.commonCharactersListPagination = response.pagination;
          this.characters = this.commonCharactersData;
          this.characterListPagination = this.commonCharactersListPagination;
        }
        else {
          this.characters = response.data;
          this.characterListPagination = response.pagination;
        }
        this.loading = false;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
        this.loading = false;
      });
  }
}
