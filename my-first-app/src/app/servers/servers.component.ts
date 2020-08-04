import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-servers></app-servers>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2500);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was created Successfully!';
  }
  OnUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
