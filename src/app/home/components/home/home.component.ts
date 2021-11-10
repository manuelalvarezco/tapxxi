import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: any;

  constructor(private fb: FormBuilder) {
    this.buildForm();
   }



  buildForm(){
    this.form = this.fb.group({
      placa: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  search(event: Event){
    event.preventDefault();
    console.log(this.form.value);

  }

}
