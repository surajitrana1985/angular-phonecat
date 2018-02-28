import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataListModule } from 'primeng/datalist';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

// Services
import { PhoneListService } from './phone-list/phone-list.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DataListModule
  ],
  providers: [
    PhoneListService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }