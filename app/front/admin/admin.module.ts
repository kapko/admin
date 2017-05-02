import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
// modules
import {AdminMenu} from './partials/menu/menu.component'
import {AdminComponent} from './admin.component'
import {SidebarComponent} from './partials/sidebar/sidebar.component'
import {About} from './about/show/about.component'
import {EditAbout} from './about/edit/edit.about.component'

const routes = [
	{
		path: '',
		component: AdminComponent,
    children:[
      {
        path: 'about',
        name: 'about',
        component: About,
      },
      {
        path: 'about/edit',
        component: EditAbout,
      },
      {
        path: 'posts',
        loadChildren: './post/post.module.ts',
      }
    ]
	},
]

@NgModule({
  declarations: [
    AdminComponent,
    About,
    EditAbout,
    SidebarComponent,
    AdminMenu,
  ],
  exports: [
    About,
    AdminMenu
  ],
  providers:[
    {
      provide: 'dates',
      useValue: 'data from admin',
    }
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export default class AdminModule{}
