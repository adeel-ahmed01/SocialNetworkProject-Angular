import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopicListComponent} from "./post/topic-list/topic-list.component";



const routes: Routes = [
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: 'topics', component: TopicListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
