import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router';
// modules
import {MenuComponent} from './partials/menu.component.ts'
import {HomeComponent} from './home.component.ts'

const routes = [
	{
		path: '',
		component: HomeComponent
	}
]


@NgModule({
  declarations: [HomeComponent, MenuComponent],
  exports: [MenuComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export default class HomeModule {}