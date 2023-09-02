import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  emailForm!:FormGroup;
  isSubmitting!:boolean;
  
  ngOnInit(): void {
    this.emailForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      message:new FormControl(null,Validators.required)
    })
  }

  sendEmail(){
    console.log(this.emailForm);
  }

}
