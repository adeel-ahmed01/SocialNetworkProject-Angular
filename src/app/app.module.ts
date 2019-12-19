import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './components/book/book.component';
import {LibraryComponent} from './components/library/library.component';
import {RegisterComponent} from './components/register/register.component';
import {BookRepository} from './services/book.repository';
import {BookService} from './services/real/book.service';
import {TopicsModule} from './topics/topics.module';
import { LoginComponent } from './components/login/login.component';
import { SpecialTopicsComponent } from './components/special-topics/special-topics.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BookComponent,
    RegisterComponent,
    LoginComponent,
    SpecialTopicsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    TopicsModule,

  ],
  providers: [
    {provide: BookRepository, useFactory: (http: HttpClient) => new BookService(http), 'deps': [HttpClient]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
