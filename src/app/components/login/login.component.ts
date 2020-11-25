import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._loginService.login();
    this._router.navigate(['private'], {replaceUrl: true})
  }

}
