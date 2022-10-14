import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {Post} from "../../admin/shared/models/post.interface";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-related-articles',
  templateUrl: './related-articles.component.html',
  styleUrls: ['./related-articles.component.scss']
})
export class RelatedArticlesComponent implements OnInit {
  @Input() post: Post;
  timeLeft: 0;
  interval;
  timeRead: string;
  status: boolean = false;
  localTimer: number;
  localTimerWords: string;

  constructor(private _vps: ViewportScroller) { }

  startTimer(anchor: string) {
    this._vps.scrollToAnchor(anchor);
    this.status = !this.status;

    this.interval = setInterval(() => {
      this.timeLeft++;

      localStorage.setItem(`timer-${this.post.id}`, `${this.timeLeft}`)
      localStorage.setItem(`timer-words-${this.post.id}`, `${this.timeRead}`)

      this.localTimer = +localStorage.getItem(`timer-${this.post.id}`);
      this.localTimerWords = localStorage.getItem(`timer-words-${this.post.id}`);

      if(this.localTimer < 60) {
        this.timeRead = 'You read the news more than 1 minutes ago'
      }else if(this.localTimer < 300) {
        this.timeRead = 'You read the news more than 5 minutes ago'
      }
      else if(this.localTimer < 600) {
        this.timeRead = 'You read the news more than 10 minutes ago'
      }
      else if(this.localTimer < 1800) {
        this.timeRead = 'You read the news more than 30 minutes ago'
      }else if(this.localTimer < 3200) {
        this.timeRead = 'You read the news more than 1 hour ago'
      }
    },1000)
  }

  ngOnInit() {
    if(this.timeLeft = 0) {}
    this.localTimer = +localStorage.getItem(`timer-${this.post.id}`);
    this.localTimerWords = localStorage.getItem(`timer-words-${this.post.id}`);
    if(this.localTimerWords == undefined){
      this.timeRead = 'Read now'
    }

  }

  // pauseTimer() {
  //   clearInterval(this.interval);
  // }
}
