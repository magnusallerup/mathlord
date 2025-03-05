import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ngOnInit(): void {
    this.genQuestion()
  }

  maff = inject(MathService)

  answer = '';
  val1 = 1;
  val2 = 2;
  question = '';
  operators = ['+','-','*']; 
  operator = '';

  checkAnswer(){
    switch(this.operator){
      case '+':{
        this.checkAnswerAdd()
        break;
      }
      case '-':{
        this.checkAnswerSub()
        break;
      }
      case '*':{
        this.checkAnswerMultiply()
        break;
      }
    }
  }

  genQuestion (){
    this.operator = this.maff.genOperators(this.operators)
    this.val1 = this.maff.randomNumber(20);
    
    if (this.operator == '-'){
      do {
        this.val2 = this.maff.randomNumber(20);     
        console.log(this.val2);
      } while (this.val2 > this.val1)
    }
    else {this.val2 = this.maff.randomNumber(20)}
    this.question = `${this.val1} ${this.operator} ${this.val2}`
  }

  checkAnswerAdd() {
    if (Number(this.answer) == this.val1 + this.val2) {
      this.genQuestion();
      this.answer = '';
    }
  }

  checkAnswerSub() {
    if (Number(this.answer) == this.val1 - this.val2) {
      this.genQuestion();
      this.answer = '';
    }
  }

  checkAnswerMultiply() {
    if (Number(this.answer) == this.val1 * this.val2) {
      this.genQuestion();
      this.answer = '';
    }
  }
}
