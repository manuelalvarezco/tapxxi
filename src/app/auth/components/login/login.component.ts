import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.buildForm();
   }




  login(event: Event){
    event.preventDefault();
    if(this.form.valid){
      this.router.navigateByUrl('/inicio')
      console.log(this.form.value);
    }

  }

  buildForm(){
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

}
