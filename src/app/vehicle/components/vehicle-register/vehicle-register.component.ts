import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-register',
  templateUrl: './vehicle-register.component.html',
  styleUrls: ['./vehicle-register.component.scss']
})
export class VehicleRegisterComponent implements OnInit {

  form: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.buildForm();
   }



  guardar(event: Event){
    event.preventDefault();
    if(this.form.valid){
      console.log(this.form.value);
    }

  }

  buildForm(){
    this.form = this.fb.group({
      placa: ['', [Validators.required, Validators.minLength(4)]],
      conductor: [''],
      empresa: [''],
      ciudad: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

}
