import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';

@NgModule({
  declarations: [
    HomeListComponent,
    DistancePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
