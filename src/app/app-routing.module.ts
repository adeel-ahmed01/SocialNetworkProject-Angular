import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './components/book/book.component';
import {LibraryComponent} from './components/library/library.component';
import {RegisterComponent} from './components/register/register.component';
import {TopicListComponent} from './topics/topic-list/topic-list.component';

const routes: Routes = [
  {path: 'topics', component: TopicListComponent},
  {path: '', component: LibraryComponent},
  {path: 'books/:id', component: BookComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
