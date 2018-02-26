import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  public pageTitle: string;
  public movieList = [];
  private pageCount = 1;
  private totalItems = 0;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.getMovieList(this.pageCount).subscribe((data) => {
      console.log(data, "blaaaaa");
      this.pageTitle = data.title;
      this.movieList = data['content-items'].content;
      this.totalItems = data['total-content-items'];
      console.log(this.movieList, this.pageTitle);
    });
  }

  public onScroll() {
    if (this.movieList.length < this.totalItems) {
      this.pageCount++;
      this.listingService.getMovieList(this.pageCount).subscribe((data) => {
        this.movieList = this.movieList.concat(data['content-items'].content);
        console.log(this.movieList, this.pageTitle);
      });
    }
  }

}
