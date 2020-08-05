import { Component } from "@angular/core";

@Component({
    //setting js objects or metadata that says what to do using this class
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    serverName = 's1.shd-one.me';
    serverId = 256;
    serverStatus: string = "offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online':'Offline';
    }

    getServerStatus(){
        return this.serverStatus;
    };

    getColor(){
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}