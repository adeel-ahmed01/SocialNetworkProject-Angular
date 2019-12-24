import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NavigationModule} from "./navigation/navigation.module";
import {PostModule} from "./post/post.module";
import {CommentListComponent} from "./post/comment-list/comment-list.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NavigationModule,
    PostModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [CommentListComponent]
})
export class AppModule {}
