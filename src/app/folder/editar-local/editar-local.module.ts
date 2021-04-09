import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarLocalPageRoutingModule } from './editar-local-routing.module';

import { EditarLocalPage } from './editar-local.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditarLocalPageRoutingModule
  ],
  declarations: [EditarLocalPage]
})
export class EditarLocalPageModule {}
