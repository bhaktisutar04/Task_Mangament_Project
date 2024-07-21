import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
  };
  isEditMode = false;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router  // Keep router private
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.taskService.getTask(Number(id)).subscribe((task) => (this.task = task));
    }
  }

  saveTask(): void {
    if (this.isEditMode) {
      this.taskService.updateTask(this.task.id, this.task).subscribe(() => this.router.navigate(['/']));
    } else {
      this.taskService.createTask(this.task).subscribe(() => this.router.navigate(['/']));
    }
  }

  cancel(): void {  // Create a cancel method
    this.router.navigate(['/']);
  }
}
