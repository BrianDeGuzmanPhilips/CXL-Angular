import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-asset',
  templateUrl: './image-asset.component.html',
  styleUrls: ['./image-asset.component.scss']
})
export class ImageAssetComponent implements OnInit {

  @Input() imageSource: string;
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
  
  sanitizedStyle: any;
  constructor(private domSantizer: DomSanitizer) { }

  ngOnInit(): void {}

}
