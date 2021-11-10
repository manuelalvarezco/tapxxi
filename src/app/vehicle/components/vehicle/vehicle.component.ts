import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  form: any;
  public showModal = false;
  position = 1;

  items = [
    {
      text:'Muy malo',
      color:'text-gray-200'
    },
    {
      text:'Malo',
      color:'text-gray-200'
    },
    {
      text:'Neutro',
      color:'text-gray-200'
    },
    {
      text:'Bueno',
      color:'text-gray-200'
    },
    {
      text:'Muy bueno',
      color:'text-gray-200'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.buildForm();
   }



  trigerShowModal(){
    this.showModal =! this.showModal;
  }


  rating(i:number){

    this.position = i + 1;

    for (let index = 0; index < this.position; index++) {
      this.items[index].color = 'text-yellow-400';
      for (let j = this.position; j < this.items.length; j++) {
        const element = this.items[j];
        this.items[j].color = 'text-gray-200';
      }
    }

  }

  buildForm(){
    this.form = this.fb.group({
      rating:[0],
      message: ['']
    })
  }

  calificar(event: Event){

    event.preventDefault();

    this.form.get('rating').patchValue(this.position);

    console.log(this.form.value);

    this.trigerShowModal();

  }

}
