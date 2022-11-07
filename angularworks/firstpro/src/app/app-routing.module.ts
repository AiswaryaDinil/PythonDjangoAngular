import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CubeComponent } from './cube/cube.component';
import { FactorialComponent } from './factorial/factorial.component';
import { IntrestComponent } from './intrest/intrest.component';
import { SmartsubComponent } from './smartsub/smartsub.component';

const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"cube",component:CubeComponent},
  {path:"sub",component:SmartsubComponent},
  {path:"factorial",component:FactorialComponent},
  {path:"intrest",component:IntrestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
