declare var $:any;

export default function message(message, messageType, time = 500){

	let body = $('body');

	let scriptMessage = ''

	if(messageType === 'success'){
		scriptMessage += '<script>'
		scriptMessage += '		setTimeout(function() {' 
	  scriptMessage += '            toastr.options = {'
	  scriptMessage += '                 closeButton: true,'
	  scriptMessage += '                 progressBar: true,'
	  scriptMessage += '                 showMethod: \'slideDown\','
	  scriptMessage += '                 timeOut: 4000'
	  scriptMessage += '             };'
	  scriptMessage += '             toastr.success(\'' + message + '\', \'Exito\');'
		scriptMessage += '		}, '+ time + ');'
		scriptMessage += '</script>'
	}else{
		scriptMessage += '<script>'
		scriptMessage += '		setTimeout(function() {' 
	  scriptMessage += '            toastr.options = {'
	  scriptMessage += '                 closeButton: true,'
	  scriptMessage += '                 debug: false,'
	  scriptMessage += '                 progressBar: true,'
	  scriptMessage += '                 preventDuplicates: false,'
	  scriptMessage += '                 positionClass: \'toast-top-right\','
	  scriptMessage += '                 onclick: null,'
	  scriptMessage += '                 showDuration: \'10000\','
	  scriptMessage += '                 hideDuration: \'10000\','
	  scriptMessage += '                 timeOut: \'3000\','
	  scriptMessage += '                 extendedTimeOut: \'10000\','
	  scriptMessage += '                 showMethod: \'fadeIn\','
	  scriptMessage += '                 hideMethod: \'fadeOut\''
	  scriptMessage += '             };'
	  scriptMessage += '             toastr.error(\'' + message + '\' , \'Ocurrió un error\');'
		scriptMessage += '		}, '+ time + ');'
		scriptMessage += '</script>'
	}


	body.append(scriptMessage);
}