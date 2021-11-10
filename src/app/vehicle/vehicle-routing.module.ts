import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleRegisterComponent } from './components/vehicle-register/vehicle-register.component';

const routes: Routes = [
  { path: '', component: VehicleComponent },
  { path: 'registro', component: VehicleRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
