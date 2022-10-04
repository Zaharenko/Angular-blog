import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../admin/shared/service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title') titleName = '';
  public href: string | undefined;

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): any {
    this.href = this.router.url.slice(0,6);
  }

  logOff() {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

}
