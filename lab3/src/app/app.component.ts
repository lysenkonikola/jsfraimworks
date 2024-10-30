import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTask: string = '';
  tasks: { name: string, completed: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  toggleTaskCompletion(task: any) {
    task.completed = !task.completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
