import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import './identification.css';
import { BlueColumn } from '../../components/blueColumn/blueColumn';
//import { BlueColumn } from '/react_proj/backup/kr_2/src/components/blueColumn/blueColumn'; 

export const Identification = (props) => {

  function ju(e){
    if(document.getElementById("23").value !== '' && document.getElementById("33").value !== ''){
      e.preventDefault();
      props.setStage(3);
      props.setGroup(document.getElementById("33").value);
      props.setFio(document.getElementById("23").value)
    }
  }
  
  return (
    <div>
    <BlueColumn />
    <form className='IdentificationForm'>
      <p>Заполните идентификационные данные для проведения контрольной работы</p>
      <span>Фио: </span>
      <input id="23" type = "text" placeholder='Фамилия И. О.' className='Fio' required></input>
      <br />
      <span>Номер группы: </span>
      <input id="33" type = "text" placeholder='К3-XXБ' className='Group' required></input>
      <br />
      <button className='Button2' onClick={ju}><span className='text'>Готово!  </span></button>    
    </form>
    </div>
  )
};
