import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoDetallePageRoutingModule } from './producto-detalle-routing.module';

import { ProductoDetallePage } from './producto-detalle.page';

import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductoDetallePageRoutingModule
  ],
  declarations: [ProductoDetallePage]
})
export class ProductoDetallePageModule {}
