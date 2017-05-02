import {Component} from '@angular/core'

@Component({
	selector: 'admin-sidebar',
	template: `<ul id="slide-out" class="side-nav fixed">
		<li><div class="userView">
		  <div class="background blue"></div>
		  <a href="#!user"><img class="circle" src="img/main.JPG"></a>
		  <a href="#!name"><span class="white-text name">John Doe</span></a>
		  <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
		</div></li>

		<li><a class="subheader">Subheader</a></li>
		<li><a class="waves-effect" [routerLink]="['about']">About</a></li>
		<li><a class="waves-effect" [routerLink]="['posts/show']">Posts</a></li>
	</ul>`
})

export class SidebarComponent{}
