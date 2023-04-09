import React from 'react'
import './test.css';
import { BlueColumn } from '../../components/blueColumn/blueColumn';
const geter = async () => {
  console.log('23');
}

export const Test = (props) => {

  let var_A = Math.floor(Math.random() * (64 - (-64)) + (-64))
  let var_B = Math.floor(Math.random() * (64 - (-64)) + (-64))

  function parse(e){
    
    e.preventDefault()

    let res = new Object() 

    let inputs = document.querySelectorAll('.test_input')
    let exercise = document.querySelectorAll('.t_1')

    res.fio = props.fio
    res.group = props.group
    res.A_var = var_A
    res.B_var = var_B
    
    for (let i = 0; i < 12; i++){
      res[exercise[i].innerHTML] = new Object();
      res[exercise[i].innerHTML]["str"] = inputs[i*4].value // прямой код
      res[exercise[i].innerHTML]["rev"] = inputs[i*4+1].value // обратный
      res[exercise[i].innerHTML]["dop"] = inputs[i*4+2].value // дополнительный
      res[exercise[i].innerHTML]["int"] = inputs[i*4+3].value  // представление
    }

   let smesh = -1;
    for(let i = 12; i < 16; i++){
      smesh += 1
      res[exercise[i].innerHTML] = new Object();
      res[exercise[i].innerHTML]["str"] = inputs[i*4+8+smesh*12].value
      res[exercise[i].innerHTML]["rev"] = inputs[i*4+9+smesh*12].value
      res[exercise[i].innerHTML]["dop"] = inputs[i*4+10+smesh*12].value
      res[exercise[i].innerHTML]["int"] = inputs[i*4+11+smesh*12].value
      
    }
    

    /*let xhr = new XMLHttpRequest();
    let url = "";
    xhr.open("POST", url, true);

    xhr.send(json);
    */


    let json = JSON.stringify(res);
    console.log(json);
    //props.setStage(2);
  }

  return (
    <div>
    <BlueColumn />
    <table className='table_'>
    <caption>Контрольная работа № 2 <br className='br4' /> А = {var_A}, В = {var_B}</caption>
    <tr>
     <th></th>
     <th>Прямой код</th>
     <th>Обратный код</th>
     <th>Дополнительный код</th>
     <th>Представление</th>
    </tr>
    
    <tr><td className='t_1'>A</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>B</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>-A</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>-B</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>

    <tr><td className='t_1'>A*2^-2</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>A*2^-3</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>A*2^+3</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>A*2^+4</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>B*2^-2</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>B*2^-3</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>B*2^+3</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td className='t_1'>B*2^+4</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
 
    <tr><td className='t_1'>A+B</td></tr>
    <tr><td>A</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>B</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>A+B=C</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td></td><td><input type = "text" className='test_input' required/></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
 
    <tr><td className='t_1'>A-B</td></tr>
    <tr><td>A</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>B</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>A-B=C</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
 
    <tr><td className='t_1'>-A+B</td></tr>
    <tr><td>-A</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>B</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>-A+B=C</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
 
    <tr><td className='t_1'>-A-B</td></tr>
    <tr><td>-A</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>-B</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td>-A-B=C</td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
    <tr><td></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td><td><input type = "text" className='test_input' required /></td></tr>
 
   </table>
   <button className='Button1' onClick={parse}><span className='text'>Готово!</span></button>
   </div>   
  )
}

