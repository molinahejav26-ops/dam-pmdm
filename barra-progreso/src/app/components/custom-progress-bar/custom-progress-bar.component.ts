import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  standalone: true,
  templateUrl: './custom-progress-bar.component.html',
  styleUrl: './custom-progress-bar.component.css',
})
export class CustomProgressBar {
  @Input() value = 0;
  @Input() color = 'primary';
  @Input() striped = false;
  @Input() animated = false;
  @Input() showText = false;
}
