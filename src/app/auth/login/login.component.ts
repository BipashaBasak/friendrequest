import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/services/backend.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitForm = false;
  

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
     
    ) { }

  ngOnInit(): void {
   
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginSubmit(form: FormGroup) {
    this.submitForm = true;
    // console.log(form.value);

    this.backendService.login(form.value).subscribe(data => {
      console.log(data);
      this.toastr.success('Login Done!', 'Successfully');

      // setting login information to the localstorage
      localStorage.setItem('authData', JSON.stringify(data));

      this.router.navigate(['home']);
    }, err => {
      console.log(err);
    

    });
  }

}
