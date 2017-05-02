import {Directive, ElementRef} from '@angular/core'
declare var $:any
declare var Materialize: any

@Directive({
	selector: '[toast]',
})

export class Toast{
	constructor(el: ElementRef){
		$(el.nativeElement).click(() => $('.modal').modal());
	}
}
