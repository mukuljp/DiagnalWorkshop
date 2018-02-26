import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css'],
  //encapsulation:ViewEncapsulation.None
  
})
export class MovieListItemComponent implements OnInit {
  @Input() public movie={
  'name':'',
  'poster-image':''
  };

  @Input() sizesc =  4;
  constructor() { }

  ngOnInit() {
  }

}
