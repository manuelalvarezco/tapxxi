import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.buildForm();
   }



  register(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.router.navigateByUrl('/inicio')
      console.log(this.form.value);
    }

  }

  buildForm(){
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
