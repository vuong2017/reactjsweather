import React , {Component} from 'react';
import PropTypes from 'prop-types';
class InfoWeather extends Component{
  render(){
    const {data} = this.props;
    return(
        <div className="InfoWeather">
          <div className="InfoWeather_title">
            <h2>Thành Phố {data.city.name},{data.city.country}</h2>
          </div>
          <div className="InfoWeather_time">
            <h4>{data.datacurrent.time.day && data.datacurrent.time.time ? data.datacurrent.time.day+' '+data.datacurrent.time.time
            :data.datacurrent.time.day}
            </h4>
          </div>
          <div className="InfoWeather_description">
            {data.datacurrent.description === "moderate rain" ? <h4>Mưa vừa phải</h4>
            : data.datacurrent.description === "sky is clear" ?  <h4>Bầu trời rõ ràng</h4>
            : data.datacurrent.description === "heavy intensity rain" ? <h4>Mưa lớn</h4>
            :<h4>Mưa nhỏ</h4>
            }
          </div>
        </div>
    );
  }
}
InfoWeather.propTypes = {
  data:PropTypes.object.isRequired
}
export default InfoWeather;
