import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  
  genQuestion (){(Math.floor(Math.random() * 10))}

  

  constructor() {
   }
}
