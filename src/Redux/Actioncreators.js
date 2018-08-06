import * as types from "../types/types";
import api from "../api/api";
export const actionCreators = {
  GetWeather : (data)=>({
    type:types.GETDATA_WEATHER_ALL,
    data
  }),
  GetDataOtherday : (index,day)=>({
    type:types.GETDATA_WEATHER_OTHERDAY,
    index,
    day
  })
}
export const RequestApiWeather = ()=>dispatch=>{
  document.body.style.background = "white url('Eclipse-1s-200px.gif') no-repeat fixed center";
  return api.weather.get().then(data=>{
    document.body.style.background = "unset";
    let datacurrent = {time:api.weather.newDate(),description:data.list[0].weather[0].description,icon:data.list[0].weather[0].icon,temp:data.list[0].temp.day,rain:data.list[0].rain,humidity:data.list[0].humidity,speed:data.list[0].speed};
    let dataall = {...data,time:api.weather.newDate(),datacurrent}
    dispatch(actionCreators.GetWeather(dataall));
  });
}
