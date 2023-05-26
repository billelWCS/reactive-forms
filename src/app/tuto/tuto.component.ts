import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss']
})
export class TutoComponent implements OnInit {


  movieForm : FormGroup = this.fb.group({
    identifiant : ['' ],
    titre : ['' ]
  })

  profilForm : FormGroup = this.fb.group({
    name : ['', Validators.required ],
    age : ['',[minAgeFunction, maxAgeFunction]],
    address : this.fb.group({
      number : [''],
      street : [''],
      city : ['']
    })
  })

  get fMovie (){
    return this.movieForm.controls;
  }

  get fProfil (){
    return this.profilForm.controls;
  }


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    // this.f['titre'].patchValue("nbn")
    this.fProfil['address'].patchValue({city: 'paris'})
    // this.fProfil.address.value.city.patchValue('London');
  }

  onSubmit(){
    // console.log(this.f['titre'].value)
    // console.log(this.movieForm.value)
    // console.log(JSON.stringify(this.fProfil.address.value))
    console.log(this.fProfil['address'].value['street'])
  }

}

export function minAgeFunction(control: AbstractControl): ValidationErrors | null {
  
  if (control.value < 18) {

    return { 'minAge18': true};
  } else {
    return null;
  }
};

export function maxAgeFunction(control: AbstractControl): ValidationErrors | null {
  
  let ageRenseigne = control.value;
  if (ageRenseigne > 50 ) {
    return { 'maxAge': true };
  } else {
    return null;
  }
};