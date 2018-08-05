import React , {Component} from 'react';
import '../styles/InfoTemp.css';
class InfoTemp extends Component{
  render(){
    const {data} = this.props;
    return(
      <div className="row InfoTemp">
        <div className="col-md-6  ">
          <div className="InfoTemp_Temp">
              <div className="InfoTemp_Temp_Icon">
              {data.description === "moderate rain" ?  <img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="icon 7day"/>
              : data.description === "sky is clear" ?  <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="icon 7day"/>
              : data.description === "heavy intensity rain" ? <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="icon 7day"/>
              :<img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="icon 7day"/>
              }
              </div>
              <div className="InfoTemp_Temp_Temp">
                <span>{data.temp}°C</span>
              </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="InfoTemp_description">
              <div className="InfoTemp_description_rain">
                <h5>Khả năng có mưa : {data.rain ? data.rain : 0}%</h5>
              </div>
              <div className="InfoTemp_description_humidity">
                <h5>Độ ẩm : {data.humidity}%</h5>
              </div>
              <div className="InfoTemp_description_clouds">
                <h5>Gió : {data.speed} km/h</h5>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InfoTemp;
