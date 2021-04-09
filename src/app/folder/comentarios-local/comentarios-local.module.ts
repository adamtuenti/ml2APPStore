import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentariosLocalPageRoutingModule } from './comentarios-local-routing.module';

import { ComentariosLocalPage } from './comentarios-local.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ComentariosLocalPageRoutingModule
  ],
  declarations: [ComentariosLocalPage]
})
export class ComentariosLocalPageModule {}
