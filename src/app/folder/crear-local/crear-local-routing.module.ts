import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearLocalPage } from './crear-local.page';

const routes: Routes = [
  {
    path: '',
    component: CrearLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearLocalPageRoutingModule {}
