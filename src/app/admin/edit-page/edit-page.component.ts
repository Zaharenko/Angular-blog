import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../shared/service/post.service";
import {Subscription, switchMap} from "rxjs";
import {Post} from "../shared/models/post.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public form: FormGroup;
  post: Post
  submitted = false
  uSub: Subscription
  dSub: Subscription

  categories = [
    {name: 'Event'},
    {name: 'News'}
  ];

  users = [
    {
      icon: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      id: 1
    },
    {
      icon: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
      id: 2
    },
    {
      icon: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png',
      id: 3
    },
  ];

  constructor(
    public router: ActivatedRoute,
    public rout: Router,
    public postService: PostService
  ) { }

  ngOnInit() {
    this.dSub = this.router.params.pipe(
      switchMap((params: Params) => {
        return this.postService.getById(params['id'])
      })
    ).subscribe((post: Post) => {
      this.post = post
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required),
        author: new FormControl(post.author, Validators.required),
        authorIcon: new FormControl(post.authorIcon, Validators.required),
        category: new FormControl(post.category, Validators.required)
      })
    })
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
    if (this.dSub) {
      this.uSub.unsubscribe()
    }
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    this.uSub = this.postService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title,
      category: this.form.value.category,
      author: this.form.value.author,
      authorIcon: this.form.value.authorIcon,
      banner: this.form.value.banner
    }).subscribe(() => {
      this.submitted = false
      this.rout.navigate(['/admin', 'dashboard'])
    })
  }

}
