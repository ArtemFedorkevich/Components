import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  Component1  } from './component1/component1.component';
import {  Component2  } from './component2/component2.component';
import {  Component3  } from './component3/component3.component';

const routes: Routes = [
  { path: 'component1', component: Component1 },
  { path: 'component2', component: Component2 },
  { path: 'component3', component: Component3 },
  { path: '', redirectTo: '/component1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}