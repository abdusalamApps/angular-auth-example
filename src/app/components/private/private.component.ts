import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(private _loginService: LoginService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this._loginService.logout();
    this._router.navigate(['login'], {replaceUrl: true});
  }

}
