import { useState, createContext } from 'react';

export const DataContext = createContext();

const Providers = ({ children }) => {
    const [tour, setTour] = useState(1);
    const [Score, setScore]= useState(0);
    const [TotalScore, setTotalScore]= useState(0);
    const [TotalQuestion, setTotalQuestion]= useState(0);
    const [TotalAnswer, setTotalAnswer]= useState(0);
    const [acolor, setAcolor] = useState("white");
    const [bcolor, setBcolor] = useState("white");
    const [ccolor, setCcolor] = useState("white");

    

    const numbers1 = [
        Math.floor(Math.random()*9+1), 
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1)
    ];
    const numbers2 = [
        Math.floor(Math.random()*9+1), 
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1),
        Math.floor(Math.random()*9+1)
    ];

    function AnswerControl(Number1,Number2,Increase){
        if(Number1 === Number2){
            if(Increase===true){
                return (Number1 + 1) * (Number1 + 1);
            }
            else{
                return (Number1 - 1) * (Number1 - 1);
            }
            
        }
        else{
            return Number1 * Number1;
        }
    }



    
    const [list, setList] = useState(
        [
            {
              question: numbers1[0] + ' * '+ numbers2[0] ,
              answer1: AnswerControl(numbers1[0],numbers2[0],false),
              answer2: AnswerControl(numbers2[0],numbers1[0],true),
              answer3: numbers1[0] * numbers2[0],
              true: numbers1[0] * numbers2[0],
              result: null
            },
            {
              question: numbers1[1] + ' * '+ numbers2[1] ,
              answer1: numbers1[1] * numbers2[1],
              answer2: AnswerControl(numbers1[1],numbers2[1],false),
              answer3: AnswerControl(numbers2[1],numbers1[1],true),
              true: numbers1[1] * numbers2[1],
              result: null
            },
            {
              question: numbers1[2] + ' * '+ numbers2[2] ,
              answer1: AnswerControl(numbers1[2],numbers2[2],false),
              answer2: numbers1[2] * numbers2[2],
              answer3: AnswerControl(numbers2[2],numbers1[2],true),
              true: numbers1[2] * numbers2[2],
              result: null
            },
            {
              question: numbers1[3] + ' * '+ numbers2[3] ,
              answer1: AnswerControl(numbers1[3],numbers2[3],false),
              answer2: AnswerControl(numbers2[3],numbers1[3],true),
              answer3: numbers1[3] * numbers2[3],
              true: numbers1[3] * numbers2[3],
              result: null
            },
            {
              question: numbers1[4] + ' * '+ numbers2[4] ,
              answer1: AnswerControl(numbers1[4],numbers2[4],false),
              answer2: numbers1[4] * numbers2[4],
              answer3: AnswerControl(numbers2[4],numbers1[4],true),
              true: numbers1[4] * numbers2[4],
              result: null
            },
            {
              question: numbers1[5] + ' * '+ numbers2[5] ,
              answer1: AnswerControl(numbers2[5],numbers1[5],true),
              answer2: AnswerControl(numbers1[5],numbers2[5],false),
              answer3: numbers1[5] * numbers2[5],
              true: numbers1[5] * numbers2[5],
              result: null
            },
            {
              question: numbers1[6] + ' * '+ numbers2[6] ,
              answer1: numbers1[6] * numbers2[6],
              answer2: AnswerControl(numbers2[6],numbers1[6],true),
              answer3: AnswerControl(numbers1[6],numbers2[6],false),
              true: numbers1[6] * numbers2[6],
              result: null
            },
            {
              question: numbers1[7] + ' * '+ numbers2[7] ,
              answer1: AnswerControl(numbers2[7],numbers1[7],true),
              answer2: numbers1[7] * numbers2[7],
              answer3: AnswerControl(numbers1[7],numbers2[7],false),
              true: numbers1[7] * numbers2[7],
              result: null
            },
            {
              question: numbers1[8] + ' * '+ numbers2[8] ,
              answer1: AnswerControl(numbers1[8],numbers2[8],false),
              answer2: AnswerControl(numbers2[8],numbers1[8],true),
              answer3: numbers1[8] * numbers2[8],
              true: numbers1[8] * numbers2[8],
              result: null
            },
            {
              question: numbers1[9] + ' * '+ numbers2[9] ,
              answer1: numbers1[9] * numbers2[9],
              answer2: AnswerControl(numbers2[9],numbers1[9],true),
              answer3: AnswerControl(numbers1[9],numbers2[9],false),
              true: numbers1[9] * numbers2[9],
              result: null
            },
        
          ]
        );


    return (
        <DataContext.Provider value={{
            tour,setTour,
            list, setList,
            Score, setScore,
            TotalScore, setTotalScore,
            TotalQuestion, setTotalQuestion,
            TotalAnswer, setTotalAnswer,
            acolor, setAcolor,
            bcolor, setBcolor,
            ccolor, setCcolor
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default Providers;