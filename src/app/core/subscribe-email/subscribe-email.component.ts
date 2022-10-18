import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Email} from "../../admin/shared/models/post.interface";
import {BannerService} from "../banner/services/banner.service";

@Component({
  selector: 'app-subscribe-email',
  templateUrl: './subscribe-email.component.html',
  styleUrls: ['./subscribe-email.component.scss']
})
export class SubscribeEmailComponent implements OnInit {
  public form: FormGroup;
  public error: string;
  status: boolean = false;
  public subscribeEmail: string;
  public subscribeEmailTime: string;
  public statusBar: boolean;
  constructor(
    public bannerService: BannerService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      this.bannerService.error('Message was not sent, there are errors')
      return
    }

    this.bannerService.success('Message was sent')
    const email: Email = {
      email: this.form.value.email,
      time: new Date(),
    }

      localStorage.setItem(`subscribe-email-time`, `${email.time}`)
      this.subscribeEmailTime = localStorage.getItem(`subscribe-email-time`);
      localStorage.setItem(`subscribe-email`, `${email.email}`)
      this.subscribeEmail = localStorage.getItem(`subscribe-email`);




  }

  checkEmail() {
    const email: Email = {
      email: this.form.value.email,
      time: new Date(),
    }
    if(this.subscribeEmail === email.email){
      this.bannerService.warning('This email already exists')
    }
  }
}
