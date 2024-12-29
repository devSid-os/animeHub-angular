import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-staff',
  templateUrl: './anime-staff.component.html',
  styleUrls: ['./anime-staff.component.css']
})
export class AnimeStaffComponent implements OnInit {
  @Input('staff') animeStaff: Array<any> = [];
  @Input('images') images: any = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.images)
  }

  concatStaffPosition(data: Array<string>): string {
    return data.join(", ");
  }

}
