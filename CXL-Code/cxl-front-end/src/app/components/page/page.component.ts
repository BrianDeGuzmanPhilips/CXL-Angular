import { Component, Input, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() assetName: string;
  @Input() assetList: any[];

  constructor() { }

  ngOnInit(): void {
  }


}
