import ReactGA from 'react-ga';

const initializeAnalatics = (pathname)=>{
  ReactGA.initialize('UA-166008242-1');
  ReactGA.pageview(pathname);
}
const ReactGAEvent=(user, action)=>{
	ReactGA.event({
	  category: user || 'user',
	  action: action
	});		
}

export {initializeAnalatics, ReactGAEvent}