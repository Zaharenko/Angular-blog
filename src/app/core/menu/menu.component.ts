import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../admin/shared/service/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public href: string | undefined;

  constructor(private router: Router,private auth: AuthService) { }

  ngOnInit(): any {
    this.href = this.router.url.slice(0,6);
  }
}
