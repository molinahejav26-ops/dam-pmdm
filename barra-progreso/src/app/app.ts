import { Component, signal } from '@angular/core';
import { CustomProgressBar } from './components/custom-progress-bar/custom-progress-bar.component';

@Component({
  selector: 'app-root',
  imports: [CustomProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('custom-progress-bar');
}
