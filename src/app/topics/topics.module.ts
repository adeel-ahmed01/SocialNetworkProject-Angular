import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListComponent } from './topic-list/topic-list.component';



@NgModule({
    declarations: [TopicListComponent],
    exports: [
        TopicListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TopicsModule { }
