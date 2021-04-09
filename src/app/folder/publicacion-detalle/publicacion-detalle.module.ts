import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicacionDetallePageRoutingModule } from './publicacion-detalle-routing.module';

import { PublicacionDetallePage } from './publicacion-detalle.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PublicacionDetallePageRoutingModule
  ],
  declarations: [PublicacionDetallePage]
})
export class PublicacionDetallePageModule {}
