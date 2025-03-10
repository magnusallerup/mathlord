import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  val1 = 1;
  val2 = 1;
  opsMap = new Map<number, string>([
    [0, '-'],
    [1, '+'],
    [2, '⋅'],
    [3, '/'],
  ]);

  randomNumber(max: number) {
    return Math.floor(Math.random() * max + 2);
  }

  genOpsMap(o: Map<number, string>) {
    let a;
    do {
      if (o.size === 0) {
        alert('tilføj en operator');
        throw new Error('no operators');
      }

      a = o.get(Math.floor(Math.random() * 4));
      console.log('operator: ' + a);
    } while (a === '' || a === undefined);
    return a;
  }

  genDivision(max: number): { dividend: number; divisor: number; quotient: number } {
    let dividend: number;
    let divisor: number = 0;
    let quotient: number = 0;
  
    do {
      dividend = this.randomNumber(max);
  
      const divisors = [];
      for (let i = 2; i <= dividend / 2; i++) {
        if (dividend % i === 0) {
          divisors.push(i);
        }
      }
      if (divisors.length === 0) continue;
  
      divisor = divisors[Math.floor(Math.random() * divisors.length)];
      quotient = dividend / divisor;
  
    } while (dividend === divisor || !divisor);
  
    return { dividend, divisor, quotient };
  }
}
