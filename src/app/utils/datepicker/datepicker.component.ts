import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'utils-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  @Output() dateRange = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    this.range.valueChanges.subscribe(() => {
      if (this.range.value.start) {
        const start = this.range.value.start ? this.range.value.start.toDate() : null;
        const end = this.range.value.end ? this.range.value.end.toDate() : null;
        this.dateRange.emit({ start: start, end: end });
      }
    });
  }

}
