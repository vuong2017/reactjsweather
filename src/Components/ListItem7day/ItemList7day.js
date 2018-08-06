import React , {Component} from 'react';
import {actionCreators} from '../../Redux/Actioncreators';
import {connect} from 'react-redux';
import api from "../../api/api";
import PropTypes from 'prop-types';
class ItemList7day extends Component{
  getDay = (day)=>{
    var d = new Date(day * 1000);
    switch (d.getDay()) {
      case 0: return {day:"CN",time:d.getDate()};
      case 1: return {day:"T2",time:d.getDate()};
      case 2: return {day:"T3",time:d.getDate()};
      case 3: return {day:"T4",time:d.getDate()};
      case 4: return {day:"T5",time:d.getDate()};
      case 5: return {day:"T6",time:d.getDate()};
      case 6: return {day:"T7",time:d.getDate()};
      default:
        return;
    }
  }
  onClick = (e,i,item)=>{
    const {data,actionCreators} = this.props;
    data.map((e,i)=>{
      return this[i].style.background="unset";
    })
    this[i].style.backgroundColor="rgb(194, 198, 198)";
    this[i].style.borderRadius="5px";
    const day = new Date(item.dt * 1000);
    actionCreators.GetDataOtherday(i,api.weather.getDay(day.getDay()));
  }
  renderListItemTemp = ()=>{
    const {data} = this.props;
    var ListItem = data.map((e,i)=>{
      let des = e.weather[0].description;
      let item = e;
      return(
        <a key={i} href={null}
        ref={(node)=>{this[i]=node}}
        onClick={(e)=>{this.onClick(e,i,item)}} >
        <div className="InfoTemp7day_Info">
           <div className="InfoTemp7day_Info_Date">
              {this.getDay(e.dt).day}/N{this.getDay(e.dt).time}
           </div>
           <div className="InfoTemp7day_Info_Icon">
              {des === "moderate rain" ?  <img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="icon 7day"/>
              : des === "sky is clear" ?  <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="icon 7day"/>
              : des === "heavy intensity rain" ? <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="icon 7day"/>
              :<img src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png" alt="icon 7day"/>
              }
           </div>
           <div className="InfoTemp7day_Info_Temp">
              {e.temp.day}°C
           </div>
        </div>
        </a>
      )
    })
    return ListItem;
  }
  render(){
    return(
      this.renderListItemTemp()
    );
  }
}
ItemList7day.propsTypes = {
  data:PropTypes.array.isRequired
}
export default connect(null,{actionCreators})(ItemList7day);
