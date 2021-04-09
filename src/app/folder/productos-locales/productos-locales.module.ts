import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosLocalesPageRoutingModule } from './productos-locales-routing.module';

import { ProductosLocalesPage } from './productos-locales.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {ComponentsModule} from 'src/app/folder/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    ProductosLocalesPageRoutingModule
  ],
  declarations: [ProductosLocalesPage]
})
export class ProductosLocalesPageModule {}
