import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../admin/shared/service/user.service";

@Component({
  selector: 'app-admin-link',
  templateUrl: './admin-link.component.html',
  styleUrls: ['./admin-link.component.scss']
})
export class AdminLinkComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
