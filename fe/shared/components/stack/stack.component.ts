import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
