import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-categoty-icon',
  templateUrl: './categoty-icon.component.html',
  styleUrls: ['./categoty-icon.component.scss']
})
export class CategotyIconComponent implements OnInit {

  @Input() title: string;
  @Input() disabled: string = '';
  @Input() icon: string;
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

}
