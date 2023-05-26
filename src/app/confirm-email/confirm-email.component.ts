import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Person } from '../models/person';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  person :  {
    name : "David",
    age : 18,
    email : "email@gmail.com",
    adresse : {
      rue : "louvre",
      cp : 75001,
      ville : "Paris"
    }
    listeAdresse : [
      adresse : {
        rue : "louvre",
        cp : 75001,
        ville : "Paris"
      },
      adresse : {
        rue : "louvre",
        cp : 75001,
        ville : "Paris"
      }
    ]
    listeCours : [
      'Angular',
      'Spring'
    ]
  }

  constructor(private route : ActivatedRoute) { }

  email : string = "";
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.email = params.get('courriel');
    });
  }

  
}
