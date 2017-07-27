import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './tabs/list/list.component';
import { ItemComponent } from './tabs/list/item/item.component';

import { CelebService } from './celeb.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CelebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
