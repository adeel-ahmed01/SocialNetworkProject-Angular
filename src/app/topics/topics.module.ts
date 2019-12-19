import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListComponent } from './topic-list/topic-list.component';
import {MatCardModule, MatListModule} from '@angular/material';



@NgModule({
    declarations: [TopicListComponent],
    exports: [
        TopicListComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatCardModule
    ]
})
export class TopicsModule { }
