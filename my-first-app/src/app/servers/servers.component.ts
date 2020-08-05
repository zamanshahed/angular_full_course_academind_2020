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
  userCreationStatus = 'No user!';
  serverName = '';
  userName='';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2500);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created Successfully! Server Name: '+this.serverName;
  }
  
  onCreateUser(){
    this.userCreationStatus = 'User was added Successfully! User Name: '+this.userName;
  }

  OnUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  OnUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }
 
  OnResetUserName(){
    if(this.userName !== ''){
      this.userName ='';
    }
  }

}
