import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, QuestionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mathlord';
}
