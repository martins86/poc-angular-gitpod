import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopBarModule } from './shared/components/top-bar/top-bar.module';

const SharedComponents = [TopBarModule];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...SharedComponents,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
