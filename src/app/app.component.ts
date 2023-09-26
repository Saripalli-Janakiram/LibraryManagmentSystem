import { Component } from '@angular/core';
import { appConstants } from './app.constants';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = appConstants.applicationName;
  constructor(private matDialog:MatDialog){}
  ngOnInit(){
  }
}
