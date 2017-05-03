import {Component, Inject} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'about',
    template:require('./about.template.html')
}) 

export class About{
	constructor(
		@Inject('dates') private data
	){
		
	}
}
