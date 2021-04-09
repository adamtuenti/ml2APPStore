import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosTodosPageRoutingModule } from './productos-todos-routing.module';

import { ProductosTodosPage } from './productos-todos.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductosTodosPageRoutingModule
  ],
  declarations: [ProductosTodosPage]
})
export class ProductosTodosPageModule {}
