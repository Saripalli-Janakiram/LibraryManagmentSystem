import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { appConstants } from '../app.constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login  = appConstants.logIn;
  password = appConstants.password;
  userName = appConstants.userName;
  newLogin = appConstants.createNewLogin;
  constructor(private readonly router:Router){}
  loginForm : FormGroup = new FormGroup({
    'loginUserName' : new FormControl(Text,Validators.required),
    'loginPassword' : new FormControl(Text,Validators.required)
  })

}
