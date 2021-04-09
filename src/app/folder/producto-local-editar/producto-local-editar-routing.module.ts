import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoLocalEditarPage } from './producto-local-editar.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoLocalEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoLocalEditarPageRoutingModule {}
