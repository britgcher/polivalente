
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { AuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterLink,
    IonicModule,
    HeaderComponent,
    AuthModule,

  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }

