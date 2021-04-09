import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPublicacionesGeneralesPageRoutingModule } from './crear-publicaciones-generales-routing.module';

import { CrearPublicacionesGeneralesPage } from './crear-publicaciones-generales.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CrearPublicacionesGeneralesPageRoutingModule
  ],
  declarations: [CrearPublicacionesGeneralesPage]
})
export class CrearPublicacionesGeneralesPageModule {}
