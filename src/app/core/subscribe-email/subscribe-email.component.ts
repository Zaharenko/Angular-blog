import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Email} from "../../admin/shared/models/post.interface";

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
  public timeEmail: Date;
  constructor() { }

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
      return
    }

    const email: Email = {
      email: this.form.value.email,
      time: new Date(),
    }

      localStorage.setItem(`subscribe-email-time`, `${email.time}`)
      this.subscribeEmailTime = localStorage.getItem(`subscribe-email-time`);
      localStorage.setItem(`subscribe-email`, `${email.email}`)
      this.subscribeEmail = localStorage.getItem(`subscribe-email`);

      this.status = !this.status;
      if(this.subscribeEmail === email.email){
        this.status = true;
        this.error = 'This email already exists'
      }

  }

}
