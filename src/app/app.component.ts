import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <form [formGroup]="numberForm">
        <app-input-number formControlName="count"></app-input-number>

        <div>{{ numberForm.get('count')?.value }}</div>
      </form>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-test';
  numberForm = this.fb.group({
    count: 5, // 设置初始值
  });

  constructor(private fb: FormBuilder) {}
}
