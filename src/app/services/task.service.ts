import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    headers: Headers = new Headers();
    options: any;

    server: string = 'http://localhost:8000/';

    constructor(private http: HttpClient) {
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Content', 'application/json');
        this.headers.append('X-Requested-with', 'XMLHttpRequest');

        this.options = new RequestOptions({ headers: this.headers });
    } 

    addTask(task):Observable<Task> {
        const newTask = new Task(task);
        return this.http.post<Task>(this.server+'add', newTask);
    }

    getTasks():Observable<Task[]> {
        return this.http.get<Task[]>(this.server+'get');
    }

    deleteTask(taskId):Observable<Task>{
        const newTask = {
            id: taskId
        }
        return this.http.post<Task>(this.server+'delete', newTask);
    }

    showTask(taskId):Observable<Task>{
        const newTask = {
            id: taskId
        }
        return this.http.post<Task>(this.server+'show', newTask)
    }
}
