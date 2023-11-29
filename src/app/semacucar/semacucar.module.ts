import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SemacucarPageRoutingModule } from './semacucar-routing.module';
import { SemacucarPage } from './semacucar.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemacucarPageRoutingModule,
    HeaderModule,
  ],
  declarations: [SemacucarPage]
})
export class SemacucarPageModule {}
