import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowcarbPageRoutingModule } from './lowcarb-routing.module';

import { LowcarbPage } from './lowcarb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowcarbPageRoutingModule
  ],
  declarations: [LowcarbPage]
})
export class LowcarbPageModule {}
