import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output()
  onClose: EventEmitter<any> = new EventEmitter<any>();
  @Input() public movieList=[];
  constructor() { }

  ngOnInit() {
  }

  public close(){
this.onClose.emit("closed");
  }

}
