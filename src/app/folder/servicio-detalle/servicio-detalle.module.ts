import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioDetallePageRoutingModule } from './servicio-detalle-routing.module';

import { ServicioDetallePage } from './servicio-detalle.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ServicioDetallePageRoutingModule
  ],
  declarations: [ServicioDetallePage]
})
export class ServicioDetallePageModule {}
