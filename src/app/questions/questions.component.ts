import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from './question';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MathService } from '../services/math.service';
@Component({
  selector: 'app-questions',
  imports: [CommonModule, FormsModule, MatSlideToggleModule, MatDividerModule, MatIconModule, MatButtonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {

  val1 = 0;
  val2 = 1;
  answer = '';
 
  ngOnInit(): void {
    console.log('');
    
    this.genQuestion()
  }
  
  genQuestion (){
     this.val1 = this.randomNumber(10);
     this.val2 = this.randomNumber(10);
  }

  randomNumber(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  checkAnswer() {
    if (Number(this.answer) == this.val1 + this.val2) {
      this.genQuestion();
      this.answer = '';
    }
  }

}
