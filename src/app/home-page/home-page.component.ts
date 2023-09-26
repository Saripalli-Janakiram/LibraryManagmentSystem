import { Component} from '@angular/core';
import { appConstants } from '../app.constants';
import { MatDialog } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { MembershipFormComponent } from '../membership-form/membership-form.component';
import { BookAllotmentComponent } from '../book-allotment/book-allotment.component';
import { NewBookComponent } from '../new-book/new-book.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  newMembership:string = appConstants.newMembership;
  allotBook: string = appConstants.bookAllotment;
  addNewBook : string = appConstants.addNewBook;
  constructor(private matDialog: MatDialog,
              private tabs:MatTabsModule){}
}
