import axios from 'axios';
const getDay = (day,time)=>{;
  switch (day) {
    case 0: return {day:"Chủ Nhật",time:time};
    case 1: return {day:"Thứ Hai",time:time};
    case 2: return {day:"Thứ Ba",time:time};
    case 3: return {day:"Thứ Tư",time:time};
    case 4: return {day:"Thứ Năm",time:time};
    case 5: return {day:"Thứ Sáu",time:time};
    case 6: return {day:"Thứ Bảy",time:time};
    default:
      return;
  }
}
const getLocation = ()=>{
  return new Promise((resolve,reject)=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        let gps = {lat:position.coords.latitude,lon:position.coords.longitude}
        resolve(gps);
      },showError);
    }
    else {
        reject("Trinh duyet khong ho tro");
    }
  })
}
const showError = (error) =>{
    switch(error.code) {
        case error.PERMISSION_DENIED:
            return document.write("Bạn chưa bật định vị");
        case error.POSITION_UNAVAILABLE:
            return document.write("Location information is unavailable.");
        case error.TIMEOUT:
            return document.write("The request to get user location timed out.");
        case error.UNKNOWN_ERROR:
            return document.write("An unknown error occurred.");
        default:
        return;
    }
}
const newDate = ()=>{
  var date = new Date();
  var day = date.getDay();
  var h = date.getHours();
  var m = (date.getMinutes()<10?0+''+date.getMinutes() : date.getMinutes() )
  var time = h + ':' + m;
  return getDay(day,time)
}
export default {
  weather:{
    get: ()=>getLocation().then(data=>{
      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?&units=metric&lat=${data.lat}&lon=${data.lon}&cnt=14&appid=c0c4a4b4047b97ebc5948ac9c48c0559`;
      return axios.get(url)
    }).then(res=>res.data).catch((error)=>document.write("Không tìm thấy!")),
    getDay : (day,time)=>getDay(day,time),
    newDate : ()=>newDate()
  }
}
