import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorsRoutingModule } from './selectors-routing.module';
import { SelectorComponent } from './selector/selector.component';


@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    SelectorsRoutingModule
  ]
})
export class SelectorsModule { }
