import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any
  imagePath: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/data')
    .subscribe(responseData => {
      console.log(responseData);
      this.list = responseData;
      console.log(this.list);
      this.list.forEach(el => {
        var video_id = el.videoUrl.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
          if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
          }
          el.videoUrl = video_id;
      })
      // var video_id = this.list[0].videoUrl.split('v=')[1];
      // var ampersandPosition = video_id.indexOf('&');
      // if(ampersandPosition != -1) {
      //   video_id = video_id.substring(0, ampersandPosition);
      // }
    })
  }
  

}
