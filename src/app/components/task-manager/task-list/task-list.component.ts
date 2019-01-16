import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../../Task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.getTask();
    }

    tasks: Task[] = [];

    getTask() {
        this.taskService.getTasks().subscribe((data) => {
            this.tasks = data;
        });
    }

}
