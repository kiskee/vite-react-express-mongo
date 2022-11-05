import React from "react";
import Logout from "./Logout";
import DayContainer from "./DayContainer"
import style from '../css/Day.module.css'
import axios from "axios";

/**
 * @returns Return on the first Monday of the week
 */

const FirstMondayoftheWeek = (dateEnter) => {

  var dateCurrent = new Date(dateEnter);

  let daytoSubtract = dateCurrent.getUTCDay();
  let day;
  if (daytoSubtract == 0) {
    day = -6;
  } else {
    day = (daytoSubtract - 1) * -1;
  }

  dateCurrent.setDate(dateCurrent.getDate() + (day -1));

  return dateCurrent;
};

/**
 * @returns Returns an array with each of the dates of the day of the week.
 */
const calculateDays = (dateEnter) => {

  let date = FirstMondayoftheWeek(dateEnter);

  // console.log(' ⟢ ⊱⊱ ⟢ ')
  // date = date.getTime() + 86400000
  // console.log(new Date(date))

  let days = [];

  for (let i = 1; i < 6; i++) {
    let tempdate = date.getTime() + 86400000 * i;
    days.push(new Date(tempdate));
  }
  return days;
};

let cookiesDaysoftheWeek = document.cookie
  .split(";")
  .filter((x) => x.search("Days of the week") > -1);

let day = [];
if (cookiesDaysoftheWeek.length == 0) {
  // As the cookies were not found; a new cookie is created and expires every Friday.

  var date = new Date();

    date.setDate(date.getDate() + 7);
    date.setHours(12, 30, 0);

  let days = calculateDays(date);
  document.cookie =
    "Days of the week" + "=" + days + "; expires=" + date + "; path=/";
} else {
  cookiesDaysoftheWeek[0]
    .split("=")
    .pop()
    .split(",")
    .forEach((temp) => {
      day.push(new Date(temp).toLocaleDateString());
    });
}


async function prueba(){
  let res = await axios.post("api/days");
  const data = res.data;
  console.log(data)

}



const Weekdays = () => {
  return (
    <div>
      <Logout />

     {
      day.map((element,index) => (
        <div key={element} style={{backgroundColor:"red"}}>
          <DayContainer day={element} number={index}/>
        </div>
      ))
     }
    </div>
  );
};

export default Weekdays;