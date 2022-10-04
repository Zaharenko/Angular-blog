import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../shared/models/user.interface";
import {AuthService} from "../shared/service/user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public user: User;
  constructor(
    public router: Router,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ]),
      remember: new FormControl('',[
        Validators.requiredTrue
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/admin', 'dashboard'])
    })
  }

  changeType() {
    document.getElementById('password').setAttribute('type','text');
  }
}
