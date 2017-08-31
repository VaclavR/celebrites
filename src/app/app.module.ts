import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddCelebrityComponent } from './add-celebrity/add-celebrity.component';
import { Error404Component } from './error404/error404.component';

import { LogService } from './log.service';
import { CelebService } from './celeb.service';



@NgModule({
  declarations: [
    AppComponent,
    AddCelebrityComponent,
    HeaderComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CelebService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
