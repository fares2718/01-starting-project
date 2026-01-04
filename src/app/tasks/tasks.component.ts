import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-tak.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;
  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
