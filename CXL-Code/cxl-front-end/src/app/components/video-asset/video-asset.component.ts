import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-asset',
  templateUrl: './video-asset.component.html',
  styleUrls: ['./video-asset.component.scss']
})
export class VideoAssetComponent implements OnInit {
  @Input() videoSource: string;
  constructor() { }

  ngOnInit(): void {
  }

}
