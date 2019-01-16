import { Component, OnInit } from '@angular/core';  
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../Task';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

    task: string;

    constructor(private taskService: TaskService) { }

    ngOnInit() {
    }

    Add(e) {
        e.preventDefault();
        this.taskService.addTask(this.task).subscribe((data) => {
            console.log("added");
        });
    }

    

}
