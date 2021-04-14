import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  assetName: string;

  assetList: any[] = [
    { assetNumber: '0', assetType: 'video', assetSource: 'assets/videos/cxl-landing.mp4' },
    { assetNumber: '1', assetType: 'image', assetSource: 'assets/images/PHI_VXC_WelcomeScreen.png' },
    { assetNumber: '2', assetType: 'iframe', assetSource: 'https://storage.net-fs.com/hosting/6582882/1/', 
      iframeStyle: { height:'2400', width:'5760', css: ''},
      divStyle: { css: '' } 
    },
    { assetNumber: '3', assetType: 'iframe', assetSource: 'https://storage.net-fs.com/hosting/6582882/0/', 
      iframeStyle: { height:'2400', width:'5760', css: ''},
      divStyle: { css: '' } 
    },
    { assetNumber: '4', assetType: 'iframe', assetSource: 'https://storage.net-fs.com/hosting/6582882/3/', 
      iframeStyle: { height:'2400', width:'5760', css: ''},
      divStyle: { css: '' } 
    },
    { assetNumber: '5', assetType: 'iframe', assetSource: 'https://www.youtube.com/embed/z6hU5hUZspk',  
      iframeStyle: { width:'2560', height:'1440', css:'margin-top: 400px; margin-left:1600px;'},
      divStyle: { css: 'background-image: url(../../../assets/images/interior-airbag-bkg.jpg); width: 5760px; height: 2160px;' }
    }
  ];

  constructor(private socketServer: SocketServiceService) { }

  ngOnInit(): void {

    this.socketServer.pageListener().subscribe(tabletSwitch => {
      if(tabletSwitch.page == '1'){
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
