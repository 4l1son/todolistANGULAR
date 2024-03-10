import { Component, ChangeDetectorRef } from '@angular/core';
import { EmailService } from '../email.service';
import $ from 'jquery';

// Declaração global da interface JQuery
declare global {
  interface JQuery {
    modal(action: string): void;
  }
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  newTask: string = '';
  tasks: string[] = [];
  updatedTasks: string[] = [];
  selectedTaskIndex: number | null = null;

  constructor(private cdr: ChangeDetectorRef, private emailService: EmailService) {}

  showUpdateInput(index: number) {
    this.selectedTaskIndex = index;
    jQuery('#updateTaskModal').modal('show');

  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.updatedTasks.push(this.newTask.trim());
      this.newTask = '';
      console.log('Task added:', this.tasks);
      this.cdr.detectChanges();
    } else {
      console.log('Empty task, not added.');
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    console.log("Task dropped:", this.tasks);
    this.cdr.detectChanges();
  }

  updateTask() {
    if (this.selectedTaskIndex !== null) {
      this.tasks[this.selectedTaskIndex] = this.updatedTasks[this.selectedTaskIndex];
      this.selectedTaskIndex = null;
    }
  }

  closeUpdateTaskModal() {
    this.selectedTaskIndex = null;
  }

  exportToXLS() {
    this.emailService.generateXLS(this.tasks);
  }

}
