import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent implements OnInit {

  assetName: string;

  assetList: any[] = [
    { assetNumber: '0', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png', height:'1080', width:'1920'},
    { assetNumber: '1', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' , height:'1080', width:'1920'},
    { assetNumber: '2', assetType: 'image', assetSource: 'assets/images/cloc-maps.png' , height:'1080', width:'1920'},
    { assetNumber: '3', assetType: 'images', assetSource: 'assets/images/40-discharge.png' , height:'1080', width:'1920'},
    { assetNumber: '4', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' , height:'1080', width:'1920'},
    { assetNumber: '5', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png', height:'1080', width:'1920'},
    { assetNumber: '6', assetType: 'image', assetSource: 'assets/images/omni-hospital-dash.png', height:'1080', width:'1920'}
  ];

  constructor(private socketServer: SocketServiceService) { }

  ngOnInit(): void {

    this.socketServer.pageListener().subscribe(tabletSwitch => {
      if(tabletSwitch.page == '4'){
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
