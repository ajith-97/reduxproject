import React , {Component} from 'react';
class CommonCountryList extends Component {
    render(){
        const countryRegionList = this.props.countryRegionList

      return(
          <select onChange= {this.props.onChange}>
              {
                  countryRegionList.map(x=>{
                      return <option>{x.name}</option>
                  })

              }
          </select>

      )
      
    }
    }
export default CommonCountryList

