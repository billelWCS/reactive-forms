import { Component, OnInit } from '@angular/core';
import { IncrementService } from '../increment.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  
  constructor(private incrementService : IncrementService) { }

  ngOnInit(): void {
  }

  showNb () : number{
    return this.incrementService.getNb();
  }

  callIncrementFromSecondPage(){
    this.incrementService.increment();
  }
  

}
