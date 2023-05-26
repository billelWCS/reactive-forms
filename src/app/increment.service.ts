import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementService {

  private nb = JSON.parse(localStorage.getItem('nb'))

  
  constructor() { }

  increment(){
    this.nb++;
    localStorage.setItem('nb', this.nb);
  }

  getNb () : number {
    return this.nb;
  }
  
}
