import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  readonly currentYear: number = new Date().getFullYear();
  @ViewChild('jikanImg') jikanImg: ElementRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.jikanImg.nativeElement, 'click')
      .subscribe((obs) => {
        window.open('https://jikan.moe/', '_blank');
      })
  }
}
