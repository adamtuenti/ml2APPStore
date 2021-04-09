import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoLocalEditarPageRoutingModule } from './producto-local-editar-routing.module';

import { ProductoLocalEditarPage } from './producto-local-editar.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductoLocalEditarPageRoutingModule
  ],
  declarations: [ProductoLocalEditarPage]
})
export class ProductoLocalEditarPageModule {}
