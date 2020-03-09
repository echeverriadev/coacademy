export function dateParse(date){
	if(!date)
		return ""

	let parseDate = new Date(date) 

	let day = parseDate.getDate()	
	if(day <= 10){
		day = '0' + day.toString();
	}
	let month = parseDate.getMonth() + 1

	if(month <= 9){
		month = '0' + month.toString()
	}

	let year = parseDate.getFullYear()	

	console.log(`${year}-${month}-${day}`)

	return `${year}-${month}-${day}`

}

export function dateFormatWithMonthName(date) {
	if(date != null){
		let newDate = new Date(date)
		let hours = newDate.getHours();
 		let minutes = newDate.getMinutes();
  		let ampm = hours >= 12 ? 'pm' : 'am';
  		hours = hours % 12;
  		hours = hours ? hours : 12; 
  		minutes = minutes < 10 ? '0'+minutes : minutes;
  		let strTime = hours + ':' + minutes + ' ' + ampm;
		let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
		let stringDate = (newDate.getDate())  + " de " + months[newDate.getMonth()] + " de " + newDate.getFullYear() + " a las " + strTime 
		return stringDate
	}
	return date
}

export function getFullDateNoHours(date){
	if(date != null){
		let newDate = new Date(date)
		let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
		let stringDate = (newDate.getDate())  + " de " + months[newDate.getMonth()] + " de " + newDate.getFullYear()
		return stringDate
	}
	return date	
}

export function getHoursParse(date){
	
	if(date != null){
		let newDate = new Date(date)
		let hours = newDate.getHours();
 		let minutes = newDate.getMinutes();
		let ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; 
		minutes = minutes < 10 ? '0'+minutes : minutes;
		let strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime
	}
	return date	
}

export function dateFormatWithoutMonthName(date){

	if(date != null){
		let newDate = new Date(date)
		let month
		let day
			if( (newDate.getMonth() + 1) >= 10 )
				month = newDate.getMonth() + 1 
			else 
				month = "0" + (newDate.getMonth() + 1)

			if (newDate.getDate() >= 10)
				day = newDate.getDate()
			else 
				day = "0" + newDate.getDate()

		let stringDate = newDate.getFullYear() + "-" + month + "-" + day 
		return stringDate
	}
	return date
}

export function addDay(date){
	
	if (!date) return "";
	
	let date_parse = new Date(date);

	date_parse.setDate(date_parse.getDate() + 1);

	return dateParse(date_parse); 

}

export function addDayWithoutFormat(date){

	if (!date) return "";
	
	let date_parse = new Date(date);

	date_parse.setDate(date_parse.getDate() + 1);

	return date_parse; 

}