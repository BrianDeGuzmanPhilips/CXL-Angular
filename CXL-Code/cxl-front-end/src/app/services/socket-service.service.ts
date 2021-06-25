import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';


class TabletInfo {
  page: string;
  assetNumber:string;
}

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {

  // socket = io('http://localhost:3000');
  socket = io('http://161.84.207.147:3000')

  public p1Asset$: BehaviorSubject<string> = new BehaviorSubject('');
  //public p1Asset$: Observable<string> = new BehaviorSubject('').asObservable();
  public pageListener$: BehaviorSubject<TabletInfo> = new BehaviorSubject({page: '', assetNumber: ''});

  constructor() { }

  public sendMessageToApp(){
    this.socket.emit('checkIfConnected');
  }

  public tabletSwitch(tabletInfo: TabletInfo){
    this.socket.emit('tabletSwitch', tabletInfo)
  }

  public pageListener(){
    this.socket.on('tabletSwitch', tabletInfo => {
      this.pageListener$.next(tabletInfo);
    });

    return this.pageListener$.asObservable();
  }

}
