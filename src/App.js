import React, {Component} from 'react';
import ReactHover from 'react-hover';
import './App.css';
import Home from '../src/components/Home';
import Head from '../src/components/Head';

	const optionsCursorTrueWithMargin = {
		followCursor:true,
		shiftX:20,
		shiftY:0
}

export default class App extends Component {
render(){
  return (
    <div className="App">
		
			<Head/>
			<ReactHover options={optionsCursorTrueWithMargin}>
			<ReactHover.Trigger type='trigger'>
      	<Home/>
				</ReactHover.Trigger>
			
      	<Home/>
				

      	<Home/>
      	<Home/>
				
				</ReactHover>
    </div>
  );
	}
}


