import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MathService {
   
  val1 = 1;
  val2 = 1;
  operators = ['+','-','*']; 
  
  randomNumber(max: number) {
    return Math.floor(Math.random() * max + 1);
  }

  genOperators(o: Array<string>){
    return o[Math.floor(Math.random() * 3)]    
  }
}