import { Component, OnInit } from '@angular/core';
import {Email} from "../shared/models/post.interface";

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  public email: any[] = [];
  public subscribeEmail: string;
  private subscribeEmailTime: string;


  constructor() { }

  ngOnInit(): void {
    this.subscribeEmailTime = localStorage.getItem(`subscribe-email-time`);
    this.subscribeEmail = localStorage.getItem(`subscribe-email`);

    this.email.unshift({
      time: `${this.subscribeEmailTime}`,
      email: `${this.subscribeEmail}`
    });
  }

}
