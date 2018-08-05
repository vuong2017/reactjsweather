import {combineReducers} from 'redux';
import * as types from "../types/types";
const initState = {
  data:null,
  isLoading:true
}
const weather = (state=initState,action={})=>{
  switch (action.type) {
    case types.GETDATA_WEATHER_ALL: return {isLoading:false,data:action.data};
    case types.GETDATA_WEATHER_OTHERDAY : return {...state,change:state.data.list.map((e,i)=>{
      if(action.index===i){
        return state.data.datacurrent = {...state.data.datacurrent,time:{day:action.day.day},temp:e.temp.day,description:e.weather[0].description,rain:e.rain,humidity:e.humidity,speed:e.speed}
      }
      return "No Change";
    })}
    default:
      return state;
  }
}
export default combineReducers({
  weather
})
