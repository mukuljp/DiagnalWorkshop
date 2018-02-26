import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _movieList=[];
  @Input() public pageTitle:string='';
  @Input() 
  set movieList(movies){
   
      this._movieList=movies;
   
  }
    get movieList() :any {return this._movieList;}
  public searchBar = false;
  constructor() { }

  ngOnInit() {
    console.log(this.movieList,"phoo")
  }
  public openSearch(){
    document.querySelector('body').style.overflow="hidden";
    this.searchBar = true;
  }
  public closeSearch(){
    document.querySelector('body').style.overflow="scroll";
    this.searchBar = false;
  }

}
