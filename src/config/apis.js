let API_URL = ''

let DEV = true;

if(DEV===true){
	API_URL= 'http://localhost:5000'
}
else{
	API_URL = 'https://api.cshops.in'
}

export {API_URL}