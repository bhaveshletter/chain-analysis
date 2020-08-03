import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-latest-block',
  templateUrl: './latest-block.component.html',
  styleUrls: ['./latest-block.component.sass'],
})
export class LatestBlockComponent implements OnInit {
  // error: string;
  block: [number, Date] = [null, null];

  myWebSocket: WebSocketSubject<any> = webSocket(environment.wsURL);

  constructor() {}

  ngOnInit(): void {
    this.myWebSocket.subscribe(
      // Called whenever there is a message from the server
      (dataFromServer) => {
        // let data = JSON.stringify(dataFromServer);
        this.block[0] = dataFromServer.x.height;
        this.block[1] = new Date(dataFromServer.x.time);
      },
      (err) => {
        // this.error =`${err || 'Something went wrong during'}  - Latest block API call`
      },
      // Called if WebSocket API signals some kind of error
      () => {
        console.log('Web socket completed');
      }
    );
    this.myWebSocket.next({ op: 'blocks_sub' });
  }

  ngOnDestroy(): void {
    this.myWebSocket.next({ op: 'blocks_unsub' });
    this.myWebSocket.complete();
  }
}
