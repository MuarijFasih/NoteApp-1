import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { ToDoList } from './toDoList/todolist.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'list', component: ListComponent},
];
@NgModule({
  declarations: [AppComponent, ToDoList, ListComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    YouTubePlayerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
