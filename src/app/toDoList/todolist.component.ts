import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
    selector: 'toDoList',
    templateUrl: './todolist.component.html'
})
export class ToDoList implements OnInit {
    show = false;

    selectedFile: File = null;
    constructor(private http: HttpClient) {}
    ngOnInit(){
        
    }

    onFile(event){
        this.selectedFile = <File>event.target.files[0];
        console.log(this.selectedFile);
    }
    addTask(data){
        const file = new FormData();
        file.append('file', this.selectedFile, this.selectedFile.name);
        file.append('title', data.title);
        file.append('videoUrl', data.videoUrl)
        this.http
        .post('http://localhost:3000/data',file)
        .subscribe(responseData => {
            console.log(responseData);
        })
    }
    getList() {
        this.show = true;
    }
}