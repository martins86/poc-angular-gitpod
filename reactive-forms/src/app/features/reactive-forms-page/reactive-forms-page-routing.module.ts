import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsPageComponent } from './reactive-forms-page.component';

const routes: Routes = [{path: '', component: ReactiveFormsPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsPageRoutingModule { }
