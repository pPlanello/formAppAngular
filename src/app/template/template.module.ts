import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BasicComponent,
    DynamicComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class TemplateModule { }
