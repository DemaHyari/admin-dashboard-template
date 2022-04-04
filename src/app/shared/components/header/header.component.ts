import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideBarToggleBtn: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggle(){
    this.sideBarToggleBtn.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300)
  }
}
