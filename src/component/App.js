import React , {Component} from 'react';
import Data from '../mock/countryRegionMock'
import CountryRegion from './countryRegion'

class  App extends Component {
  render(){
  return (                                      
    <div className="App">
      <h1>{this.props.Content.heading}</h1>
     <CountryRegion Content={this.props.Content}/> 
      </div>
  );
}
}
App.defaultProps = {Content: Data}
export default App;
   
 