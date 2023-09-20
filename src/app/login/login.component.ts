import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { appConstants } from '../app.constants';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login  = appConstants.logIn;
  password = appConstants.password;
  userName = appConstants.userName;
  NewLogin = appConstants.createNewLogin;
  loginForm : FormGroup = new FormGroup({
    'loginUserName' : new FormControl(Text,Validators.required),
    'loginPassword' : new FormControl(Text,Validators.required)
  })
}
