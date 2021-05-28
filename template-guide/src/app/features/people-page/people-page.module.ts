import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplePageRoutingModule } from './people-page-routing.module';
import { PeoplePageComponent } from './people-page.component';


@NgModule({
  declarations: [
    PeoplePageComponent
  ],
  imports: [
    CommonModule,
    PeoplePageRoutingModule
  ]
})
export class PeoplePageModule { }
