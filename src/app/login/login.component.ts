import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
}
