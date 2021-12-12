import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitForm = false;
  cities: any = [];

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
    private router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      city: ['', Validators.required]

    });

    this.getCities();
  }

  registerSubmit(form: FormGroup) {
    this.submitForm = true;
    // console.log(form.value);

    this.backendService.register(form.value).subscribe(data => {
      console.log(data);
      this.toastr.success('Registeration Done!', 'Successfully');
      this.router.navigate(['']);
    }, err => {
      console.log(err);

    });
  }

  getCities() {
    this.backendService.getCities().subscribe((data: any) => {
      this.cities = data.data;
      console.log(data);
    }, err => {
      console.log(err)
    });
  }

}
