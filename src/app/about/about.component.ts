import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  posts: any = [];
  data1: any = null;
  users: any = [];

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService
    ) { }

    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params.id);
      // or we can also write it as => console.log(params['id']);
    });

    // this.getBackendData();

    this.getAllPosts();
  }
  
  getBackendData() {
     console.log(this.backendService.getData());
  }

  getAllPosts() {
    this.backendService.getPosts().subscribe((res: any) => {
      this.users = res.users;
      // console.log(this.users);
      // this.posts = res;
      // console.log(this.posts);
    }, err => {
      console.log(err);
      // alert('Please try again later');
    })
  }
} 








