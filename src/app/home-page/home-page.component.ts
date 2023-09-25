import { Component } from '@angular/core';
import { appConstants } from '../app.constants';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  newMembership:string = appConstants.newMembership;
  allotBook: string = appConstants.bookAllotment;
  addNewBook : string = appConstants.addNewBook;
  constructor(matDialog: MatDialog){}

}
