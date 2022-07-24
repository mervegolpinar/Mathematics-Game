import React , { useContext } from 'react'
import '../css/final.css';
import {  useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';


const Final = () => {
    const {setTour,list,Score, setScore}  = useContext(DataContext);

    const navigate = useNavigate();

  function turChange() {
   setTour(a => a + 1);
    navigate('/game');
    setScore(0)

  }



    return (
        <div className='container'>
            <div className='finall'>
                <h1>Final</h1>
                <h2>Point : {Score}</h2>
                <h2>Questions : {Score === 0 ? "0" : list.length}</h2>
                <h2>Correct Answers : {list.filter(item=> item.result===true).length}</h2>
                <div 
      style={{ color: 'white', border: '3px solid #FFFFFF', left: '25%', position: 'absolute', 
      borderRadius: '100%', padding: '20px', fontSize: '45px',textDecoration:'none' }} 
      onClick={turChange}
      
      >
        Restart
        </div>

            </div>
            <div className='allquestion'>
                <h1>All Question</h1>
                <div className='response'>
                    { Score === 0 ? "":
                    list.map((col) => {
                        return (
                            <p>{col.question} = {col.true} <span style={{paddingLeft:"30px"}}>{col.result!=null && col.result===true ? "✓":" X"}</span> </p>
                        );
                    })
                    }
                </div>

            </div>
        </div>
    )
}
export default Final;