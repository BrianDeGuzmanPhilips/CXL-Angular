import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.scss']
})
export class PageSixComponent implements OnInit {

  assetName: string;

  assetList: any[] = [
    { assetNumber: '0', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '1', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '2', assetType: 'iframe', assetSource: 'https://l54oh0.axshare.com/#g=1&p=cloc_vision&c=1', 
      iframeStyle: { height:'1080', width:'1920', css: ''},
      divStyle: { css: '' } 
    },
    { assetNumber: '3', assetType: 'iframe', assetSource: 'https://evpdrv.axshare.com/#g=1&p=patientflow_2020&c=1', 
      iframeStyle: { height:'1080', width:'1920', css: ''},
      divStyle: { css: '' } 
    },
    { assetNumber: '4', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png' },
    { assetNumber: '5', assetType: 'image', assetSource: 'assets/images/shield-dark-1980.png'},
    { assetNumber: '6', assetType: 'iframe', assetSource: 'https://omnicare-app-demo.cloud.pcftest.com/', 
      iframeStyle: { height:'1080', width:'1920', css: ''},
      divStyle: { css: '' } 
    }
  ];

  constructor(private socketServer: SocketServiceService) { }

  ngOnInit(): void {

    this.socketServer.pageListener().subscribe(tabletSwitch => {
      if(tabletSwitch.page == '6'){
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
