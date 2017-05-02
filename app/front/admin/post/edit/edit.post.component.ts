import {Component, Inject} from '@angular/core'
import {Location} from '@angular/common'

@Component({
	selector: 'post',
	template: require('./edit.post.template.html')
})

export class Edit{
	post: any = {};
	_url: string;

	constructor(
		public _location: Location,
		@Inject('data') public data,
		@Inject('helper') public helper
	){
		this._url = location.pathname
			.match(/\edit.*/ig)[0]
			.split(/\//ig)[1];

		this.post = this.data.find(item => item._id === this._url);
	}

	editPost(form){
		this.data.map(item => {
			if(item._id === this._url)
				item.name = form.value.name;
				item.about = form.value.about;
		});
		this.helper.toast({text: 'Your post have edited.'})
		this._location.back();
	}
}
