import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { type User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './new-task/new-tak.model';

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
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks.splice(
      this.tasks.findIndex((t) => t.id === id),
      1
    );
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: 'u' + (this.tasks.length + 1).toString(),
      userId: this.user.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
