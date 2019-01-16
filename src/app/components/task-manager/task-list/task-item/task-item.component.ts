import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../../../services/task.service'

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

    constructor(private taskService: TaskService) { }

    @Input()task:Task;
    
    ngOnInit() {
    }

    Delete(){
        this.taskService.deleteTask(this.task.id).subscribe((data)=>{

            console.log(data.id);
        });
    }

}
