import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearProductoLocalPageRoutingModule } from './crear-producto-local-routing.module';

import { CrearProductoLocalPage } from './crear-producto-local.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    CrearProductoLocalPageRoutingModule
  ],
  declarations: [CrearProductoLocalPage]
})
export class CrearProductoLocalPageModule {}
