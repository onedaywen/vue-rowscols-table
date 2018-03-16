const ArrayPrototype = Array.prototype;
const isObject = function (obj) {
	return obj !== null && typeof obj === 'object';
};
const isArray = function (arr) {
	return ArrayPrototype.toString.call(arr) === '[object Array]';
};

const METHODS = [ 
	'GET',
	'HEAD',
	'POST',
	'PUT',
	'DELETE',
	'CONNECT',
	'OPTIONS',
	'TRACE',
	'PATCH',
];
const EVENTS = [
	'abort',
	'error',
	'loadstart',
	'load',
	'loadend',
	'progress',
	'timeout',
];

var setHeaders = function (xhr, headers) {
	for(let i in headers) {
		if(headers.hasOwnProperty(i)){
			let headerVal = headers[i];
			if(isArray(headerVal) || isObject(headerVal)) {
				headerVal = JSON.stringify(headerVal);
			}
			xhr.setRequestHeader(i, headerVal);
		}
	}
};

const ajax = function (param) {
	if(!isObject(param)) {
		throw new Error('request param must be an Object');
	}
	if(!param.url || typeof param.url !== 'string') {
		throw new Error('request url error');
	}

	const xhr = new XMLHttpRequest();

	let url = param.url;
	let method = param.method.toUpperCase();
	let async = param.async === false ? false : true;
	let data = param.data || {};
	let headers = param.headers || {};
	let events = param.events || {};

	xhr.timeout = param.timeout || 0;

	if(!METHODS.includes(method)) {
		throw new Error('request method error');
	}

	if(method === 'GET') {
		url += '?';
		for(let i in data) {
			if(data.hasOwnProperty(i)){
				url += i + '=' + data[i] + '&';
			}
			
		}
		url = url.substring(0, url.lastIndexOf('&'));
	}

	
	let p = new Promise(function(resolve, reject) {
		xhr.addEventListener('readystatechange', (e) => {
			if(xhr.readyState === 4) {
				if(xhr.status === 200 || xhr.status === 304) {
					var res = {};
					try {
						res = JSON.parse(xhr.responseText)
					} catch (err) {
						res = xhr.responseText;
					}
					resolve(res);
				} else {
					reject(e);
				}	
			}
		}, false);

		['abort', 'error', 'timeout'].forEach(evt => {
			xhr.addEventListener(evt, (e) => {
				reject(e)
			}, false);
		})
	});
	

	xhr.open(method, url, async);

	setHeaders(xhr, headers)

	xhr.send(data);

	p.abort = function () {
		return xhr.abort();
	}
	p.getResponseHeader = function (headerName) {
		return xhr.getResponseHeader(headerName);
	}
	p.getAllResponseHeaders = function () {
		return xhr.getAllResponseHeaders();
	}

	return p;
}


module.exports = ajax;