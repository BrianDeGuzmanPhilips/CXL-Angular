import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-asset',
  templateUrl: './image-asset.component.html',
  styleUrls: ['./image-asset.component.scss']
})
export class ImageAssetComponent implements OnInit {

  @Input() imageSource:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
