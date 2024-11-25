export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		if(appsmith.URL.queryParams.token === "thisistoken"){
			navigateTo("Mock", {}, "SAME_WINDOW")
		}
	}
}