import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddCelebrityComponent } from './add-celebrity/add-celebrity.component';
import { Error404Component } from './error404/error404.component';

const routes = [
  { path: '', redirectTo: '/new-celebrity', pathMatch: 'full'},
  { path: 'new-celebrity', component: AddCelebrityComponent },
  { path: 'list', loadChildren: './tabs/tabs.module.ts#TabsModule' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}
