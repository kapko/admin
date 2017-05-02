import {Post} from './post.component'
import {Show} from './show/show.post.component'
import {Create} from './create/create.post.component'
import {Edit} from './edit/edit.post.component'

export const route = [
	{
		path: '',
		component: Post,

		children:[
			{
				path: 'show',
				component: Show
			},
			{
				path: 'create',
				component: Create
			},
			{
				path: 'edit/:id',
				component: Edit
			},
		]
	}
]
