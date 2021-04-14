import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})
export class TabletComponent implements OnInit {

  headerButtonsList: any[] = [
    { longName: 'main', shortName:'main', id:'1-1;2-0;3-0;4-0;5-0;6-0;7-0', icon: 'grid_view' },
    { longName: 'sleep', shortName:'sleep', id:'1-0;2-0;3-0;4-0;5-0;6-0;7-0', icon: 'nightlight_round' }
  ];

  buttonsList: any[] = [
    {longName: 'Command Center Vision', shortName:'cloc', id:'1-2;2-2;3-2;4-2;5-2;6-2;7-2'},
    {longName: 'Baptist Rooms of the Future', shortName: 'baptist', id:'1-3;2-0;3-0;4-0;5-0;6-0;7-0'},
    {longName: 'Contactless Wellness Screening', shortName: 'cmon', id:'1-4;2-0;3-0;4-0;5-0;6-0;7-0'},
    {longName: 'OmniCare', shortName: 'omni', id:'1-5;2-6;3-6;4-6;5-6;6-6;7-6'}
  ];

  constructor(private socketServer: SocketServiceService) { }

  ngOnInit(): void {
  }

  parsePageAssetWithId(button): void {
    console.log(button);

    var pageIdStrings = button.id.split(';');

    for(var i = 0; i < pageIdStrings.length; i++) {
        var pageIdString = pageIdStrings[i].split('-');
        var payload = { page: pageIdString[0], assetNumber: pageIdString[1] };
        this.socketServer.tabletSwitch(payload);
    }
    // parse and pass to socket
  }

}
