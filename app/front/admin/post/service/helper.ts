declare var Materialize:any;

export class Helper{
	toast(args){
		Materialize.toast(args.text, 1000)
	}
}
