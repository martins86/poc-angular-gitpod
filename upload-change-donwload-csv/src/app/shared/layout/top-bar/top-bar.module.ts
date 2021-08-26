import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [MatToolbarModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, ...materialModules],
  exports: [TopBarComponent],
})
export class TopBarModule {}
