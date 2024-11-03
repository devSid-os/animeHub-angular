import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit, OnDestroy {

  @Input('images') images: Array<any>;
  @Input('imageNumber') imageNumber: number = 0;
  @Output('onCloseImageViewer') onCloseImageViewer: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('onImageChange') onImageChange: EventEmitter<'prev' | 'next'> = new EventEmitter<'prev' | 'next'>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.images = [];
  }

}
