import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
notes=['Note Number 1','Note Number 2','Note number 3','Note Number 4'];
  constructor() { }

  ngOnInit(): void {
  }

}
