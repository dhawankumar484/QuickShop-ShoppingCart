import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  currentAge:any;

  constructor(private formBuilder: FormBuilder, private toastr : ToastrService){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', [Validators.required,Validators.min(6000000000), Validators.max(9999999999)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,]],
      age: ['', [Validators.required, Validators.min(8), Validators.max(120)]],
      dob: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  });
      
  }

  get form() { 
    return this.registerForm.controls;
  }


  //Calculating age from DOB
  dateOfBirth(event:any){
    let currentAge = moment().diff(moment(event.target.value, "YYYY-MM-DD"), "years");
  }

  //submitting form
  onSubmit() {
    this.submitted = true;

    //Checking if age and dob matches or not
    if(this.currentAge!=='' && this.currentAge != this.registerForm.controls['dob'].value){
      this.toastr.error("Enter a valid Date of birth or Age");
      return;
    }


    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    console.log(this.registerForm.value);
    this.toastr.success("Form submitted succesfully");
  }

  //reset the form
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.toastr.success("Form is reset")
  }


}
