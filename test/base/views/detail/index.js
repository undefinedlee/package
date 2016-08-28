import DetailService from "../../service/detail";
import calendar from "../../components/calendar/index";
import "babel-polyfill";

export default class Detail extends DetailService {
	constructor(){
		super();
		this.items = Array.from(3);
	}

	b=1;

	a(){
		this.b = 2;
	}
}