import utils from "node-pearls";
var code = utils.removeInvalid(`
	__DEV__ == 123 ?alert(1):alert(2);
	alert(3);
`, {
	"__DEV__": "123"
});
console.log(code);