import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router';

@Component({
	selector: 'home',
	template: `<h1>Hello Worl</h1>`
})

export class HomeComponent{}

const routes = [
	{
		path: '',
		component: HomeComponent
	}
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export default class HomeModule {}