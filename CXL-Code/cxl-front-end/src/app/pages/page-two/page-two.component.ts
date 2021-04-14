import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  assetName: string;

  assetList: any[] = [
    { assetNumber: '0', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '1', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '2', assetType: 'image', assetSource: 'assets/images/cloc-idn.png' },
    { assetNumber: '3', assetType: 'images', assetSource: 'assets/images/40-pending-admits.png' },
    { assetNumber: '4', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '5', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png'},
    { assetNumber: '6', assetType: 'image', assetSource: 'assets/images/omni-incident-command.png'}
  ];

  constructor(private socketServer: SocketServiceService) { }

  ngOnInit(): void {

    this.socketServer.pageListener().subscribe(tabletSwitch => {
      if(tabletSwitch.page == '2'){
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
