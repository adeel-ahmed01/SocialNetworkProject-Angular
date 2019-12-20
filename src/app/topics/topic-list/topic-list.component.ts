import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngu-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  private url = 'http://localhost:8080/api/topics';
  public topicsList: any;
  public userConnected;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getAllTopics();
  }

  public getAllTopics() {
    this.topicsList = this.http.get(this.url);
  }

}
