import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-asset',
  templateUrl: './iframe-asset.component.html',
  styleUrls: ['./iframe-asset.component.scss']
})
export class IframeAssetComponent implements OnInit {

  @Input() iframeSource:string;
  @Input() width: string;
  @Input() height: string;
  @Input() iframeStyle:string;
  @Input() allow: string;

  sanitizedUrl: any;
  sanitizedStyle: any;

  constructor(private domSantizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizedUrl = this.domSantizer.bypassSecurityTrustResourceUrl(this.iframeSource);
    this.sanitizedStyle = this.domSantizer.bypassSecurityTrustStyle(this.iframeStyle);
  }

}
