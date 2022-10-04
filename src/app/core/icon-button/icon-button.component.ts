import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() title: string;
  @Input() disabled: string = '';
  @Input() icon: string;
  @Input() @HostBinding('class') color: 'green' | 'blue' | 'grey' | 'white' | 'transparent';
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
