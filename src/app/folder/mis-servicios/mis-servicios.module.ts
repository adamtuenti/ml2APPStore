import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisServiciosPageRoutingModule } from './mis-servicios-routing.module';

import { MisServiciosPage } from './mis-servicios.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    MisServiciosPageRoutingModule
  ],
  declarations: [MisServiciosPage]
})
export class MisServiciosPageModule {}
