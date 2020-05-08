let API_URL = ''

let DEV = false;

if(DEV===true){
	API_URL= 'https://localhost:5000'
}
else{
	API_URL = 'https://api.cshops.in'
}

export {API_URL}