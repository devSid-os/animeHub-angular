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
  characters: Array<any> = [];
  characterListPagination: any = null;
  pageNo: number = 1;
  modalData: any = null;

  ngOnInit(): void {
    this.getCharactersList({ order_by: 'favorites', sort: 'desc', page: this.pageNo, limit: 24 })
  }

  openModal(data: any) {
    this.modalData = data;
    this.modalData.about = this.modalData.about.replace(/\n{2,}/g, '<br />');
    this.modalData.about = this.modalData.about.replace(/\n/g, "<br />");
    this.isModalOpen = true;
    setTimeout(() => {
      this._renderer2.setStyle(this.modal.nativeElement, 'transform', 'scale(1)');
    }, 1)
  }

  closeModal() {
    this._renderer2.setStyle(this.modal.nativeElement, 'transform', 'scale(0)');
    setTimeout(() => {
      this.isModalOpen = false;
      this.modalData = null;
    }, 150)
  }


  getCharactersList(filters: any): void {
    this._animeService.getAllCharacters(filters)
      .then((response: any) => {
        this.characters = this.characters.concat(response.data);
        this.characterListPagination = response.pagination;
      })
      .catch((error: any) => {
        console.log("Error: ", error);
      })
  }
}
