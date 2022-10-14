import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../shared/models/post.interface";
import {PostService} from "../shared/service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  public form: FormGroup;
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
    public postService: PostService,
    public router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
        Validators.required
      ]),
      author: new FormControl('', [
        Validators.required
      ]),
      authorIcon: new FormControl('', [
        Validators.required
      ]),
      banner: new FormControl('', [
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required
      ])
    })
  }

  submit() {
    if (this.form.valid) {
      const post: Post = {
        author: this.form.value.author,
        authorIcon: this.form.value.authorIcon,
        category: this.form.value.category,
        date: new Date(),
        banner: this.form.value.banner,
        text: this.form.value.text,
        title: this.form.value.title

      }
      this.postService.create(post).subscribe(
        () => {
          this.form.reset()
          this.router.navigate(['/admin', 'dashboard'])
        }
      )
    }
  }
}
