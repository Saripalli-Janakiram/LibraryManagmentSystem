import { Component } from '@angular/core';
import { FormGroup,FormControl, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.scss']
})
export class MembershipFormComponent {

  membershipForm = new FormGroup({
   ctrlFirstName: new FormControl("",Validators.required),
   ctrlLastName: new FormControl("",Validators.required),
   ctrlEmail: new FormControl("",Validators.required),
   ctrlPhone: new FormControl("",Validators.required),
   ctrlAddress: new FormControl("", Validators.required)
  });
  public testData(){
    if(this.membershipForm.valid){
    console.log(this.membershipForm.controls.ctrlFirstName.value);
    console.log(this.membershipForm.controls.ctrlLastName.value);
    console.log(this.membershipForm.controls.ctrlEmail.value);
    console.log(this.membershipForm.controls.ctrlPhone.value);
    console.log(this.membershipForm.controls.ctrlAddress.value);
    }
  }
  public reset(){
    this.membershipForm.reset();
  }
}
