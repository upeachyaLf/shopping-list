import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './common/alert/alert.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AlertComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, // App routing module should only be imported after feature routing modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
