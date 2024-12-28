import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga-roles',
  templateUrl: './manga-roles.component.html',
  styleUrls: ['./manga-roles.component.css']
})
export class MangaRolesComponent implements OnInit {

  @Input('mangaRoles') mangaRoles: Array<any> | null = null;
  @Input('characterImage') characterImage: any = null;
  @Input('characterName') characterName: string | null = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.mangaRoles)
  }

}
