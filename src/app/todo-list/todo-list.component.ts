import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.setTitle('To Do List');
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  todos: Todo[] = [];
  newTodo = '';
  editingIndex: number | null = null;
  editedTodo = '';

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo.trim() });
      this.newTodo = '';
    }
  }

  editTodo(index: number) {
    this.editingIndex = index;
    this.editedTodo = this.todos[index].text;
  }

  updateTodo() {
    if (this.editedTodo.trim() !== '') {
      this.todos[this.editingIndex!].text = this.editedTodo.trim();
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editedTodo = '';
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.cancelEdit();
  }
}

interface Todo {
  text: string;
}
