import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  //encapsulation:ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {
  private _movieList= [];
  @Input() 
  set movieList(movies){
    this._movieList=[];
    movies=movies.slice();
    while (movies.length > 0){
      this._movieList.push(movies.splice(0, 3));
    }
    console.log(this._movieList);
  }
    get movieList() :any {return this._movieList;}
  
  constructor() { }

  ngOnInit() {
  }

}
