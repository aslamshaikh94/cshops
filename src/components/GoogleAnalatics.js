import ReactGA from 'react-ga';

const initializeAnalatics = async (pathname)=>{
  await ReactGA.initialize('UA-166008242-1');
  await ReactGA.pageview(window.location.pathname + window.location.search);  
}
const ReactGAEvent=(user, action)=>{
	ReactGA.event({
	  category: user || 'user',
	  action: action
	});			
}

export {initializeAnalatics, ReactGAEvent}