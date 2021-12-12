import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  ContactForm!: FormGroup;
  submitForm = false;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ContactForm = this.fb.group({
      name:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
    });
  }

  contactSubmit(form: FormGroup) {
    this.submitForm = true;
    console.log(form);
  }

}



