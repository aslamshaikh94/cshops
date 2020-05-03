function getToken(){
  let TOKEN={ headers: {'Content-Type': 'application/json', 'auth-token': localStorage.getItem('token')} }
  return TOKEN
}
function loaderBar(status){
	const loader = document.getElementById("loader")
  if(status){
  	loader.style.display = 'block';
  }
  else{
  	loader.style.display = 'none';
  }
}


export {getToken, loaderBar}