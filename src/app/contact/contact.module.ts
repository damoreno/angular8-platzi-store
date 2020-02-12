import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './components/contact.component';
import {SharedModule} from '../shared/shared.module';
import {ContactRoutingModule} from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    CommonModule,
    SharedModule
  ],
})
export class ContactModule { }
