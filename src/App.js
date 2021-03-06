import React ,{Component} from 'react';
import InfoTemp from './Components/InfoTemp';
import InfoWeather from './Components/InfoWeather';
import InfoTemp7day from './Components/InfoTemp7day';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './App.css';
class App extends Component{
  render(){
    const {data,isLoading} = this.props;
    if(isLoading){
      return null;
    }
    else{
      return(
        <div style={{paddingTop:"20px"}} className="container">
          <div className="col-md-8 offset-md-2 main">
              <InfoWeather data={data} />
              <InfoTemp data={data.datacurrent}/>
              <InfoTemp7day data={data.list} />
          </div>
        </div>
      );
    }
  }
}
App.propTypes  = {
  data: PropTypes.shape({
    datacurrent:PropTypes.object,
    list:PropTypes.array
  }).isRequired,
  isLoading:PropTypes.bool.isRequired
}
function mapStateToProps(state){
  return{
    data:state.weather.data,
    change:state.weather.change,
    isLoading:state.weather.isLoading
  }
}
export default connect(mapStateToProps)(App);
