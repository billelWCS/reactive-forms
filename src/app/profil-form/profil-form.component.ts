import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil-form',
  templateUrl: './profil-form.component.html',
  styleUrls: ['./profil-form.component.scss']
})
export class ProfilFormComponent implements OnInit {

  submitted = false;
  profilForm : FormGroup = this.fb.group({
    name : ['', Validators.required],
    age : ['', [Validators.required, minAge(20)]],
    address : this.fb.group({
      number : [''], 
      cp : [''],
      city : ['']
    })
  },{
    validators: isRequired('name', 'age') 
  })

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.profilForm.valueChanges
    // .subscribe(value => {
    //   console.log(value); 
    // });

    // this.f.address.patchValue({
    //   number : 3
    // })
  }

  

  get f() {
    return this.profilForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    console.log("address : "+JSON.stringify(this.f.address.value.cp))
    console.log(JSON.stringify(this.profilForm.value));
  }

}

export function plus18(control : FormControl): ValidationErrors | null{
  if (control.value < 18 )
    return {'age' : true}
  else
    return null
}

export function minAge(ageMin : number): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value < ageMin )
      return {'age' : true}
    else
      return null
  }
}

export function isRequired(controlName1 , controlName2){
  return (control: AbstractControl): ValidationErrors | null => {
    if (
        control.get(controlName1).value==='' 
        && control.get(controlName2).value===''
      )
      return {'isRequired' : true}
    else
      return null
  }
  
}