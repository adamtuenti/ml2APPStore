import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearProductoLocalPage } from './crear-producto-local.page';

const routes: Routes = [
  {
    path: '',
    component: CrearProductoLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearProductoLocalPageRoutingModule {}
