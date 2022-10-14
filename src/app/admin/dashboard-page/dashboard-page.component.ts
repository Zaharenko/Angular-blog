import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../shared/service/post.service";
import {Post} from "../shared/models/post.interface";
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  public loading: boolean;
  public searchInput: '';
  public searchField: string;
  public urlImages = 'assets/post-banners';
  dSub: Subscription;

  constructor(private postsService: PostService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.loading = true;
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    })
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(
      () => this.posts.filter(
        post => {
          post.id !== id
          this.ngOnInit()
        }
      )
    )
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

  public identify(index, item){
    return item.name;
  }

}
