import React, { Component } from 'react'
import { getCountryList } from "../action/action-get-CountryList";
import { connect } from 'react-redux';
import CommonCountryList from './common/commonCountryList'

class CountryRegion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown1: [],
            dropdown2: [],
            selected: '',
        };
    }
    componentDidMount() {
        this.setCountries(this.props.Content.countries[0].name);
       }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if (prevProps.result !== nextProps.result) {
            return {
                dropdown2: nextProps.result,
                selected: nextProps.name
            };
        }
        return null;
    }

    setCountries(name) {
        this.props.getCountryList(name);
        if (this.props.result) {
            this.setState({
                dropdown2: this.props.result
            });
        }
    }

    handleOnClick(e) {
        e.preventDefault()
        this.setCountries(e.target.value);

    }

    render() {
      return (
            <div>
                < CommonCountryList onChange={this.handleOnClick.bind(this)} countryRegionList={this.props.Content.countries}></ CommonCountryList>
                < CommonCountryList countryRegionList={this.props.result}></ CommonCountryList>
            </div>
        )
    }


}
const mapStateToProps = (state) => {
    return {
        result: state.event.result,
        error: state.event.error,
    };

};
const mapDispatchToProps = (dispatch) => ({
    getCountryList: (name) => dispatch(getCountryList(name))
});


export default connect(mapStateToProps, mapDispatchToProps)(CountryRegion);