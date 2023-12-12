export default {
	createTimeZone () {
		const result = [];
		new Array(25).fill(null).forEach((el, index) => {
			let utcZone = -12 + index;
			if(utcZone >= 0){
				utcZone = "+" + utcZone;
			}
			result.push({"timeZone": "UTC " + utcZone, code: utcZone})
		})
		return result;
	},
	async resetTimeZone(){
		resetWidget("TimeZoneSelect")
		resetWidget("ToDateInput")
		resetWidget("FromDateInput")
	}
}