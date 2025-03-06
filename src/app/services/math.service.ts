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
  ]);

  randomNumber(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  genOpsMap(o: Map<number, string>) {
    let a;
    do {
      if (o.size === 0) {
        alert("tilføj en operator")
        throw new Error('no operators');
      }

      a = o.get(Math.floor(Math.random() * 3));
      console.log('operator: ' + a);
    } while (a === '' || a === undefined);
    return a;
  }
}
