import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  Nom: AbstractControl;
  Description: AbstractControl;
  Statu: AbstractControl;
  TodoForm: FormGroup;
    todos: IToDo[] = [];
  buttonText: string = 'ajouter';
  constructor(private formBuilder: FormBuilder , private todoservice : TodoService) { 
    this.TodoForm = this.formBuilder.group({
      Nom: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Statu: ['',[Validators.required]],
  });
  
  this.Nom = this.TodoForm.controls.Nom;
  this.Description = this.TodoForm.controls.Description;
  this.Statu = this.TodoForm.controls.Statu;

  ngOnInit(): void {
  }

}
