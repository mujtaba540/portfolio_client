import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit{
  emailForm!:FormGroup;
  isSubmitting!:boolean;

  constructor(private messageService: MessageService) {}

  
  ngOnInit(): void {
    this.emailForm=new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      message:new FormControl(null,Validators.required)
    })
  }

  sendEmail(){
    const {name,email,message} = this.emailForm.getRawValue();
    const serviceId = "service_76xhh6f";
    const templateId = "template_e9q4bjv";
    const to_name = "Muhammad Mujtaba";
    const publicKey = "feyz6bie9Pq98q6ap";
    this.isSubmitting=true
    
    emailjs.init(publicKey)
    emailjs.send(serviceId,templateId,{
      to_name: to_name,
      from_name: name,
      from_email: email,
      message: message,
      }).then(res=>{
        this.emailForm.reset()
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Delivered Successfully!' });
      }).catch(err=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Deliverey Failed!. Retry.' });
        
      }).finally(()=>{
        this.isSubmitting=false
      })
  }

}
