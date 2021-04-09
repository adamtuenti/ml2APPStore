import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosLocalesPage } from './productos-locales.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosLocalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosLocalesPageRoutingModule {}
