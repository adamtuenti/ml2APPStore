import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLocalPageRoutingModule } from './detalle-local-routing.module';

import { DetalleLocalPage } from './detalle-local.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    DetalleLocalPageRoutingModule
  ],
  declarations: [DetalleLocalPage]
})
export class DetalleLocalPageModule {}
