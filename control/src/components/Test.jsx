import axios from "axios";


async function prueba() {

////MOSTRAR LOS DIAS
 // let res = await axios.post("/api/usuario/days");
  //const data = res.data;
  //console.log(data[0].userList)


////NEW DAY
 // const day = {
 //   date: '11/30/2022',
 //   userList: []
 // };
 // let res = await axios.post('/api/newday',day);
 // const data = res.data;
 // console.log(data)


//////////AÑDIR USUARIO AL DIA
/*
   const [date, setdate] = useState('')
  const [temp, settemp] = useState([])


 const newUSer = {
    "email":"123@si.com",
    "shedule":"fullTime",
    "type":"work"
}

 useEffect(() => {
  axios.post('/api/getday', {date:"11/03/2022"}).then(res => {
    setdate(res.data[0].date)
    settemp(res.data[0].userList)
    settemp(current => [...current, newUSer]);
})
  return () => {
    
    const newDayuser = {
      date: date,
      userList: temp,
  }

  axios.post('/api/updateday', newDayuser)
  
  }
}, [])

//DELETE USER FROM LIST
function lili(){
  axios.post("/api/getday", { date: "11/30/2022" }).then((res) => {
    setdate(res.data[0].date);
    settemp(
      res.data[0].userList.filter(item => item.email != '123@si.com')
    );

    const newDayuser = {
      date: "11/30/2022",
      userList: res.data[0].userList.filter(item => item.email != '123@si.com'),
    };
    axios.post('/api/updateday', newDayuser)
    //temp.filter(item => item.email != '123@si.com')
  });

}
*/









}




export default prueba;