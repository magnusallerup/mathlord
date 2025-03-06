import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MathService } from '../services/math.service';
import { Question } from './question';

@Component({
  selector: 'app-questions',
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css',
})
export class QuestionsComponent implements OnInit {
  ngOnInit(): void {
    this.newQuestion();
  }

  maff = inject(MathService);
  operators = new Map<number, string>([
    [0, '-'],
    [1, '+'],
    [2, '⋅'],
  ]);
  answer = '';
  val1 = 1;
  val2 = 2;
  question = '';
  operator = '';
  add = true;
  sub = true;
  mul = true;

  toggleAdd() {
    this.add = !this.add;
  }
  toggleSub() {
    this.sub = !this.sub;
  }
  toggleMul() {
    this.mul = !this.mul;
  }

  checkAnswer() {
    switch (this.operator) {
      case '+': {
        this.checkAnswerAdd();
        break;
      }
      case '-': {
        this.checkAnswerSub();
        break;
      }
      case '⋅': {
        this.checkAnswerMultiply();
        break;
      }
    }
  }

  toggleOperator(n: number, o: string) {
    if (this.operators.has(n)) {
      this.operators.delete(n);
    } else {
      this.operators.set(n, o);
    }
    this.printMap();
  }

  printMap() {
    console.log(this.operators.size);
    for (const v of this.operators) {
      console.log(v);
    }
  }

  newQuestion() {
    this.operator = this.maff.genOpsMap(this.operators) ?? '';
    this.val1 = this.maff.randomNumber(20);

    if (this.operator == '-') {
      do {
        this.val2 = this.maff.randomNumber(20);
        console.log(this.val2);
      } while (this.val2 > this.val1);
    } else {
      this.val2 = this.maff.randomNumber(20);
    }
    this.question = `${this.val1} ${this.operator} ${this.val2}`;
  }

  checkAnswerAdd() {
    if (Number(this.answer) == this.val1 + this.val2) {
      this.newQuestion();
      this.answer = '';
    }
  }

  checkAnswerSub() {
    if (Number(this.answer) == this.val1 - this.val2) {
      this.newQuestion();
      this.answer = '';
    }
  }

  checkAnswerMultiply() {
    if (Number(this.answer) == this.val1 * this.val2) {
      this.newQuestion();
      this.answer = '';
    }
  }
}
