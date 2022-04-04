import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggle(e: Event){
    this.sideBarState = !this.sideBarState
  }
}
