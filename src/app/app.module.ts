import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './tabs/list/list.component';
import { ItemComponent } from './tabs/list/item/item.component';
import { AddCelebrityComponent } from './add-celebrity/add-celebrity.component';

import { CelebService } from './celeb.service';
import { LogService } from './log.service';
import { HeaderComponent } from './header/header.component';
import { Error404Component } from './error404/error404.component';

const routes = [
  { path: '', redirectTo: '/list/all', pathMatch: 'full'},
  { path: 'list', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':opinion', component: ListComponent }
  ] },
  { path: 'new-celebrity', component: AddCelebrityComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    AddCelebrityComponent,
    HeaderComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CelebService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
