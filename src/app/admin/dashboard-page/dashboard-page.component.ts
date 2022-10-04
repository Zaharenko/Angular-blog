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
  public urlImages = 'D:\\Project\\Courses\\Course Angular Aliaksandr EPAM\\blog\\blog\\src\\assets\\post-banners';
  public today: number;
  public currentDate: Date

  constructor(private postsService: PostService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.loading = true;
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
      // this.today = Date.now() - +this.posts[1].date;
      // this.currentDate = new Date(this.today)
      // console.log(this.currentDate)
      this.loading = false;
    })
  }

  remove(id: string) {
    this.postsService.remove(id).subscribe(
      () => this.posts.filter(
        post => post.id !== id
      )
    )
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

  public identify(index, item){
    return item.name;
  }

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
