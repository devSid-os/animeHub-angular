import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-roles',
  templateUrl: './anime-roles.component.html',
  styleUrls: ['./anime-roles.component.css']
})
export class AnimeRolesComponent implements OnInit {

  @Input('animeRoles') animeRoles: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
