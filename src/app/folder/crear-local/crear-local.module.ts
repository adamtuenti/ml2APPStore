import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearLocalPageRoutingModule } from './crear-local-routing.module';

import { CrearLocalPage } from './crear-local.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CrearLocalPageRoutingModule
  ],
  declarations: [CrearLocalPage]
})
export class CrearLocalPageModule {}
