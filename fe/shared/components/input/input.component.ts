import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {
  @Input() label: string;

  @Input() name: string;
}