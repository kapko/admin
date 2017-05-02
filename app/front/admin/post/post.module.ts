import {NgModule, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
// modules
import {Post} from './post.component'
import {Show} from './show/show.post.component'
import {Create} from './create/create.post.component'
import {Edit} from './edit/edit.post.component'
import {DeleteDialog} from './directives/delete.post'
import {route} from './post.router'
import {Toast} from './directives/toast'

import {data} from './service/data'
import {Helper} from './service/helper'
import {Find} from './show/pipe' 

@NgModule({
	exports: [
		Post, 
		Show, 
		Create, 
		Edit, 
		DeleteDialog
	],
	imports: [
		RouterModule.forChild(route), 
		CommonModule, 
		FormsModule
	],
	providers:[
		{
			provide: 'data',
			useValue: data,
		},
		{
			provide: 'helper',
			useClass: Helper,
		}
	],
	declarations:[
		Post, 
		Show, 
		Create, 
		Edit, 
		DeleteDialog, 
		Toast,
		Find,
	],
})

export default class PostModule{}
