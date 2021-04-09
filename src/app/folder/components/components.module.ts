import { NgModule } from '@angular/core';
import {HeaderComponent} from 'src/app/folder/components/header/header.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
declarations: [
    HeaderComponent,
],
exports: [RouterModule,HeaderComponent],

})
export class ComponentsModule { }