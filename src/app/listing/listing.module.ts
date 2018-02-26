import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListingComponent } from './listing/listing.component';
import { ListingService } from './services/listing.service';
import { FilterPipe} from './pipes/filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  declarations: [HeaderComponent, MovieListComponent, MovieListItemComponent, SearchBarComponent, ListingComponent,FilterPipe],
  exports:[ListingComponent],
  providers:[ListingService]
})
export class ListingModule { }
