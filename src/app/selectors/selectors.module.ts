import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorsRoutingModule } from './selectors-routing.module';
import { SelectorComponent } from './selector/selector.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    SelectorsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SelectorsModule { }
