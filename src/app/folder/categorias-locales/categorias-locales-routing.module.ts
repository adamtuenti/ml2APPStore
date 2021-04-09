import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasLocalesPage } from './categorias-locales.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasLocalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasLocalesPageRoutingModule {}
