import { Component } from '@angular/core';
import { FormGroup,FormControl, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent {
 constructor(){}
 addBookForm = new FormGroup({
  ctrlBookName: new FormControl("",Validators.required),
  ctrlAuthorName: new FormControl("",Validators.required),
  ctrlVolume: new FormControl("",Validators.required),
  ctrlNoOfBooks: new FormControl("",Validators.required)
 })

 public reset(){
  this.addBookForm.reset();
}
public testData(){
  if(this.addBookForm.valid){
    console.log(this.addBookForm.controls.ctrlBookName.value);
    console.log(this.addBookForm.controls.ctrlAuthorName.value);
    console.log(this.addBookForm.controls.ctrlVolume.value);
    console.log(this.addBookForm.controls.ctrlNoOfBooks.value);
    }
    this.reset();
}
}

