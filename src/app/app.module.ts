import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDXSU75yoNDXB221rZNqR5dBdCnq4ikRBg",
  authDomain: "todolist-2dc53.firebaseapp.com",
  projectId: "todolist-2dc53",
  storageBucket: "todolist-2dc53.appspot.com",
  messagingSenderId: "726362218311",
  appId: "1:726362218311:web:0dc5e40187bd690b7b3662",
  measurementId: "G-QRDJ7QEC8Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
