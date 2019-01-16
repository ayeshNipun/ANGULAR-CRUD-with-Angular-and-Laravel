import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {

    task: Task;
    constructor(private route: ActivatedRoute, private taskService: TaskService) { }

    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.taskService.showTask(data.id).subscribe((task)=>{
                this.task = task;
            });
        });
    }

}
