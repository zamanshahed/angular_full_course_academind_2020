import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soln3',
  templateUrl: './soln3.component.html',
  styleUrls: ['./soln3.component.css']
})
export class Soln3Component implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  ngOnInit(): void {
  }
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length+1);
  }

}
