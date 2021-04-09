import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisProductosPageRoutingModule } from './mis-productos-routing.module';

import { MisProductosPage } from './mis-productos.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MisProductosPageRoutingModule
  ],
  declarations: [MisProductosPage]
})
export class MisProductosPageModule {}
