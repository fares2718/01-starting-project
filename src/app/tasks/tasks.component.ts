import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';

type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.user.id);
  }
}
