import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterLink,
    IonicModule

  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
