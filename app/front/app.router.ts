export const routers = [
	{
		path: '',
		loadChildren: './home/home.module.ts'
	},
	{
		path: 'admin',
		loadChildren: './admin/admin.module.ts'
	},
]
