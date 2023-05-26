import { Component, OnInit } from '@angular/core';
import { IncrementService } from '../increment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  
  constructor(
    private incrementService : IncrementService,
    private router: Router
    ) { }
  
  
  
  ngOnInit(): void {}

  showNb() : number {
    return this.incrementService.getNb();
  }

  callIncrementFromFirstPage(){
    this.incrementService.increment();
  }

  goToSecondPage(){
    this.router.navigate(['page-2'])
  }

}
