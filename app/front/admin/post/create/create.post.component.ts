import {Component, Inject} from '@angular/core'
import {Location} from '@angular/common'
import './create.post.less'

declare var Materialize:any;

@Component({
	selector: 'post',
	template: require('./create.post.template.html')
})

export class Create{

	constructor(
		public _location: Location,
		@Inject('data') public dataPosts,
		@Inject('helper') public helper,
	){
	}

	createPost(form){
		const helper = this.helper;

		if(!form.valid)
			return helper.toast({text: 'Please edit all fields!'});

		form.value._id = Date.now();
		this.dataPosts.push(form.value);
		this._location.back();
		helper.toast({text: 'New post created'});
	}
}
