import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];

  constructor(

    // private fb: FormBuilder,
    // private router: Router,
    private backendService: BackendService,
    private authService: AuthService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void { 
    
    this.getAllUsers();
  }

  getAllUsers() {
    const payload = {
      userId: this.authService.getLoggedInUserId()
    }
    this.backendService.getAllUsers(payload).subscribe((data: any) => {
      this.users = data.data;
      // console.log(this.users);
    }, err => {
      console.log(err)
    });
  }

  addFriend(userId) {
    const payload = {
      fromUserId: this.authService.getLoggedInUserId(),
      toUserId: userId
    };
    this.backendService.addFriends(payload).subscribe((data: any) => {
      if (data.status === 'success') {
        this.toastr.success(data.message, 'Success');
      } else {
        this.toastr.error(data.message, 'Error');
      }
      // console.log(this.users);
    }, err => {
      console.log(err)
    });
  }
}
