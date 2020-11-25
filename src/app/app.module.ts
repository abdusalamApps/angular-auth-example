import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import {MatOptionModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatOptionModule,
    MatListModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5uM21fX0xEYTcqRKgvjwVFqBs1Ve9hAc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
