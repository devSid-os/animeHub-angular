import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-contributions',
  templateUrl: './anime-contributions.component.html',
  styleUrls: ['./anime-contributions.component.css']
})
export class AnimeContributionsComponent implements OnInit {
  @Input('contributions') contributions: Array<any> = [];
  @Input('personImage') personImage: any = null;
  @Input('personName') personName: string | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
