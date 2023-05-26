import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-chalenge',
  templateUrl: './chalenge.component.html',
  styleUrls: ['./chalenge.component.scss']
})
export class ChalengeComponent implements OnInit {

  date = new Date();
  submitted = false;
  movieForm : FormGroup = this.formBuilder.group({
    info : this.formBuilder.group({
      titre : [''],
      identifiant : [''],
    },{
      validators : isRequiredValidator('titre','identifiant') 
    }),
    type : ['episode'],
    annee : ['', [rangeDateValidator(1900, this.date.getFullYear())]]
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.movieForm.valueChanges
    .subscribe(value => {
      console.log(value);  
    });
  }

  get f (){
    return this.movieForm.controls;
  }
  onSubmit(){
    this.submitted = true;
  }


}

export function rangeDateValidator(min : number, max : number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    let anneeRenseigne = control.value;
    if (anneeRenseigne < min || anneeRenseigne > max) {
      return { 'min': true };
    } else {
      return null;
    }
  };
}

export function isRequiredValidator(controlName1, controlName2): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
  
    const value1 = control.get(controlName1).value;
    const value2 = control.get(controlName2).value;

    if (value1 === '' && value2 === '') {
      return { 'isRequired' : true };
    } else {
      return null;
    }
  };
}