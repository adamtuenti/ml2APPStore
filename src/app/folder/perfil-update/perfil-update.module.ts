import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUpdatePageRoutingModule } from './perfil-update-routing.module';

import { PerfilUpdatePage } from './perfil-update.page';
import {ComponentsModule} from 'src/app/folder/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PerfilUpdatePageRoutingModule
  ],
  declarations: [PerfilUpdatePage]
})
export class PerfilUpdatePageModule {}
