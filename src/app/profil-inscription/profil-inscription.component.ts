import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil-inscription',
  templateUrl: './profil-inscription.component.html',
  styleUrls: ['./profil-inscription.component.scss']
})
export class ProfilInscriptionComponent implements OnInit {


  profileForm : FormGroup ;
  coursSuivis : FormArray;
  formValue : any = {};

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstname : ['', [Validators.required]],
      lastname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      age : [''], 
      courses : this.fb.array([])
    })

    this.coursSuivis = this.profileForm.get('courses') as FormArray;
  }

  get f(){
    return this.profileForm.controls;
  }

  addCourse(){
    this.coursSuivis.push(this.fb.control(''));
    console.log(this.coursSuivis.controls[0]);
  }

  onSubmit(){
    this.profileForm.value
    console.log(this.profileForm.controls.firstname.value);
  }

}
