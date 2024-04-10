import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  template: `
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ count }}</span>
      <button (click)="increment()">+</button>
    </div>
  `,
  styleUrls: ['./input-number.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true,
    },
  ],
})
export class InputNumberComponent implements OnInit {
  _count: number = 0;

  get count() {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    this.updateValue(this._count);
  }

  constructor() {}

  ngOnInit() {}

  writeValue(value: any) {
    if (value) {
      this.count = value;
    }
  }

  updateValue: (value: any) => void = (_: any) => {};
  updateValueByTouched: (value: any) => void = (_: any) => {};

  registerOnChange(fn: any) {
    this.updateValue = fn;
  }

  registerOnTouched(fn: any) {
    this.updateValueByTouched = fn;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
