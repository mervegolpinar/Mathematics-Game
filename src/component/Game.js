import Svg from '../svg';
import useSizing from '../hooks/sizing';
import '../App.css';
import { useEffect, useState, useContext} from 'react';
import { useNavigate  } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

export const Game = () => {
  
  const{ tour, list, setList, Score, setScore,setAcolor,setBcolor,setCcolor }=useContext(DataContext);

  const [w, h] = useSizing();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [sira, setSira] = useState(0);
  const [className, setClassName] = useState("App");
  const [isClick, setIsClick] = useState(true);

 

  const navigate = useNavigate();

  

// EKRAN ÖLÇÜ AYARLAMA
  useEffect(() => {
    const ratio = 1.7;

    if(w / h > ratio) {
      setSize({
        width: h * ratio,
        height: h,
      });
    }
    else {
      setSize({
        width: w * 0.9 ,
        height: ( w * 0.9 ) / ratio,
      })
    }
  }, [w, h]);



  function answered(secim) {
    setIsClick(false);
    var ScoreData=Score;
    const ListData=list;
    if(list[sira].true === parseInt(secim)){
      setClassName('App bgSuccess')
   
      
      const scoreTotal = Math.ceil(Math.sqrt(secim));
      ScoreData= ScoreData+scoreTotal;
      setScore(a => a +  scoreTotal);

      
      ListData[sira].result=true;

      setList(ListData);
      
    }
    else{
      setClassName('App bgError ')
      const ListData=list;
      ListData[sira].result=false;

      setList(ListData);
     
      
    }

    setTimeout(
      function (){
        setAcolor("white");
          setBcolor("white");
          setCcolor("white");
        if(sira < list.length-1){
          setSira(a => a + 1);
        }
        else{
          const TotalScore = parseInt(localStorage.getItem("TotalScore")!=null ? localStorage.getItem("TotalScore"):0) + ScoreData; 
          const TotalQuestion =  parseInt(localStorage.getItem("TotalQuestion")!=null ? localStorage.getItem("TotalQuestion"):0) + ListData.length;
          const TotalAnswer =  parseInt(localStorage.getItem("TotalAnswer")!=null ? localStorage.getItem("TotalAnswer"):0) + ListData.filter(merve=> merve.result===true).length; 
          
    
          localStorage.setItem("TotalScore",TotalScore.toString()) 
          localStorage.setItem("TotalQuestion",TotalQuestion.toString())
          localStorage.setItem("TotalAnswer",TotalAnswer.toString()) 

          
    
          navigate('/final',{List:list})
          //oyun bitti
        }
        setClassName('App');
        setIsClick(true);
      }
      , 3000);
    
    
  }

  return (
    <div className={className}>
      <div className='state'>
        <ul>
          <li>Score : {Score} </li>
          <li>Tour :  {tour}</li>
          <li>Ouestions:  {(sira+1) +"/"+ list.length}</li>
        </ul>
      </div>
      <Svg width={size.width} height={size.height}
        question={list[sira].question}
        a1={list[sira].answer1}
        a2={list[sira].answer2}
        a3={list[sira].answer3}
        correctResult={list[sira].true}  
        answered={answered}
        isClick={isClick}
        
   
        />
    </div>
  );
}

export default Game;
