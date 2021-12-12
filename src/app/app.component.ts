import { GeneratedFile } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-fulstack-app';

  persons = [
    'Tom',
    'John'
  ];

  realpersons = [
    {
      id: 1,
      Name: 'Tom',
      Email: 'tom@gmail.com',
      Age: 51
    },

    {
      id: 2,
      Name: 'John',
      Email: 'john@gmail.com',
      Age: 21
    }


  ];

  constructor(
    public authService: AuthService,
   
  ) { }

  ChangeTitle() {
    this.title = 'Change the title from button click';
  }

}
