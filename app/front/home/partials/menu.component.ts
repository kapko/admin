import {Component} from '@angular/core'

@Component({
	selector: 'app-menu',
	template: `<nav>
		<div class="nav-wrapper">
		  <a
		  	routerLink="admin" 
		  	class="brand-logo right">Admin</a>
		  <ul id="nav-mobile" class="left hide-on-med-and-down">
		    <li><a routerLink="">Home</a></li>
		  </ul>
		</div>
	</nav>`
})

export class MenuComponent{}
