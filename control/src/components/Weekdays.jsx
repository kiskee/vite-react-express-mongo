import React from 'react'


const day = [1,2,3,4,5];



var date = new Date('11/02/2022');
var primerDia = new Date(date.getFullYear(), 1);//Primer dia del mes;
var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);//Ultimo dia del mes
 
console.log(primerDia);
console.log(ultimoDia);

diapararestar=primerDia.getUTCDay();
if(diapararestar==0){
    dias1=(-6);        
}else{
    dias1=(diapararestar-1)*(-1);        
}

primerDia.setDate(primerDia.getDate() + dias1);
console.log("Lunes de la semana:");
console.log(primerDia);



const Prueba = () => {
  return (
    <div>


       {
        day.forEach(element=>{
          console.log(element)
        })
       }
      
    </div>
  )
}

export default Prueba