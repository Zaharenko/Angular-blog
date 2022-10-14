import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription, switchMap} from "rxjs";
import {Post} from "../../../admin/shared/models/post.interface";
import {ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../../../admin/shared/service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post$: Observable<Post>;
  public pageId: string;
  private routeSubscription: Subscription;
  posts$: Observable<Post []>

  constructor(
    public postService: PostService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAll()

    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getById(params['id'])
      }))

    this.routeSubscription = this.route.params.subscribe(params=>this.pageId=params['id']);
  }



}
