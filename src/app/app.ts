import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Test],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Vedam-Evolution');
  name = "Vedamanikanta Vanga";
}
