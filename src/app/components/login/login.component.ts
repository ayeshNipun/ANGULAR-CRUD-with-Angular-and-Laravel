import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    login(e) {
        e.preventDefault();
        const target = e.target;
        const uname = target.querySelector('#username').value;
        const passw = target.querySelector('#password').value;

        if(uname == passw){
            this.router.navigateByUrl('task');
        }
  }

}
