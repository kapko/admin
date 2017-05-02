import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
	name: 'find',
})

export class Find implements PipeTransform{
	transform(
			items: any[], 
			data: any[],
			value: string
		){

		if(!items) return[]
		return items.filter(it => {
			let name = this.toLower(it[data[0]]),
				about = this.toLower(it[data[1]]);

			if(name.match(value) || about.match(value)){
				return it;
			}
		});
	}

	toLower(text){
		return text.toLowerCase();
	}
}
