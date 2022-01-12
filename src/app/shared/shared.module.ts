import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { CustomMinDirective } from './directives/custom-min.directive';



@NgModule({
  declarations: [
    SidemenuComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent,
    CustomMinDirective
  ]
})
export class SharedModule { }
