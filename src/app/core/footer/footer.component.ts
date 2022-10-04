import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input('title') title = '';
  @Input('footer') footer = '';
  public date: Date;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
  }

}
