import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../../admin/shared/models/post.interface";
import {PostService} from "../../admin/shared/service/post.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts$: Observable<Post []>

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.getAll();
  }

}
