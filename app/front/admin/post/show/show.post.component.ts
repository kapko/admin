import {Component, Inject} from '@angular/core'
declare var $:any

@Component({
    selector: 'show',
    template: require('./show.post.template.html'),
})

export class Show{
	posts: any;

	constructor(
			@Inject('data') public data,
		){
		this.posts = this.data;
	}
}
