import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Token } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showTasks: boolean = true;
  user: string = 'invalid';
  userToken: string
  constructor(
    private http: HttpClient,
    private token: Token
    ) {}

  ngOnInit() {
    // this.token.dropInCatagory();
  }

  onCreatePost(postData: { username: string; password: string }) {
    // Send Http request
    // this.token.saveList();
    // this.showTasks = !this.showTasks
  }

  onShow(flag: boolean){
    // console.log(`agya ${flag}`)
    this.showTasks = flag;
    this.onFetchPosts();
  }

  onFetchPosts() {
    // Send Http request
    this.token.getList();
  }
}
