// var Index = [],
// 	i;
// // 数字
// for(i = 48; i < 58; i ++){
// 	Index.push(String.fromCharCode(i));
// }
// // 大写
// for(i = 65; i < 91; i ++){
// 	Index.push(String.fromCharCode(i));
// }
// // 小写
// for(i = 97; i < 123; i ++){
// 	Index.push(String.fromCharCode(i));
// }
const Index = "0123456789abcdefghijklmnopqrstuvwxyz";
// 10进制转62进制
export default function(num, _Index){
	if(num == 0)
		return "0";

	_Index = _Index || Index;

	const hex = _Index.length;

	var result = [],
		item = 1;
	while(num >= item){
		result.unshift(_Index[(num % (item * hex)) / item | 0]);
		item *= hex;
	}
	return result.join("");
};