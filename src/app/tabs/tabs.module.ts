import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';

const routes = [
  { path: '', component: TabsComponent, pathmatch: 'full', children: [
    { path: '', redirectTo: 'all', pathmatch: 'full'},
    { path: ':opinion', component: ListComponent }
  ] }
];

@NgModule({
  declarations: [
    TabsComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class TabsModule {}
