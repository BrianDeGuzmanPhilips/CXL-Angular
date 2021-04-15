import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  assetName: string;

  assetList: any[] = [
    { assetNumber: '0', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '1', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '2', assetType: 'image', assetSource: 'assets/images/cloc-hospital.png' },
    { assetNumber: '3', assetType: 'images', assetSource: 'assets/images/40-transitions.png' },
    { assetNumber: '4', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '5', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png'},
    { assetNumber: '6', assetType: 'image', assetSource: 'assets/images/omni-transport-officer.png'}
  ];

  constructor(private socketServer: SocketServiceService) { }

  ngOnInit(): void {

    this.socketServer.pageListener().subscribe(tabletSwitch => {
      if(tabletSwitch.page == '3'){
        this.assetName = tabletSwitch.assetNumber;
        
        //this.assetName = '1';
        // route /page1/img/1
      }else if(tabletSwitch.page == ''){
        // initial load, defaults to img0
        this.assetName = '0';
        console.log(this.assetName);
      }
    });
  }

}