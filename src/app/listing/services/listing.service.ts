import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ListingService{
    constructor(private http: HttpClient) { }
    private movieList = [];
    public getMovieList(pageNo){
        return this.http.get(`assets/API/CONTENTLISTINGPAGE-PAGE${pageNo}.json`)
        .pipe(
            map((res:any) => {
                console.log(res,"blaa");
                return res.page}) // or any other operator
          );
    }
}