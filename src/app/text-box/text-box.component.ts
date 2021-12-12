import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {
  toUserId = null;
  messages = [];
  sender = null;
  receiver = null;
  currentUser = null;
  chatForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
    private authService: AuthService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.chatForm = this.fb.group({
      text: ['', Validators.required],

    });

    this.route.params.subscribe(params => {
      this.toUserId = params.toUserId;
    });


    setInterval(() => {
      this.getChatMessages();
    }, 3000);

    this.currentUser = this.authService.getLoggedInUserId();
  }

  
  getChatMessages() {
    const payload = {
      fromUserId: this.authService.getLoggedInUserId(),
      toUserId: this.toUserId
    };
    this.backendService.getChatMessages(payload).subscribe((data: any) => {
      this.messages = data.messages;
      this.sender = data.sender;
      this.receiver = data.receiver;
    }, err => {
      console.log(err)
    });
  }

  chatSubmit(form: FormGroup) {

    console.log(form.value);

    const payload = {
      fromUserId: this.authService.getLoggedInUserId(),
      toUserId: this.toUserId,
      text: form.value.text
    }

    this.backendService.sendChatMessages(payload).subscribe(data => {
      form.reset();
      this.toastr.success('Message Added!', 'Successfully');
      this.getChatMessages();
    }, err => {
      console.log(err);


    });
  }
}


