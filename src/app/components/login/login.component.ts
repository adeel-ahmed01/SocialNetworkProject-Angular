import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ngu-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  bookForm = new FormGroup({
    email : new FormControl(),
    password: new FormControl()
    }
  );
  url = "http://localhost:8080/api/login";
  @Input('userConnected') isPosted;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
  }


  submitForm() {

    this.isPosted = this.http.post(this.url, this.bookForm.value);
  }

}
