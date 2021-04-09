import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentariosLocalPage } from './comentarios-local.page';

const routes: Routes = [
  {
    path: '',
    component: ComentariosLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentariosLocalPageRoutingModule {}
