import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'utils-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() selectTitle = '';
  @Input() options = [{ value: '', text: '' }];
  @Output() selectChanged = new EventEmitter<string>();

  selected = '';
  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelect(e: any) {
    this.selectChanged.emit(e);
  }

}
