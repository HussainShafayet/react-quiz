import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAnswer from '../../useAnswer';
import Analysis from '../Analysis'
import Summary from '../Summary';
import _ from 'lodash'

export default function Result() {
  let { id } = useParams();
  const location = useLocation();
  const {state} = location;
  const {qna} = state;
  const { loading, error, answer } = useAnswer(id);
  function calculatResult(){
    let score = 0;
    answer.forEach((question,index1)=>{
      let correctIndex = [];
      let checkedIndex = [];
      question.options.forEach((option,index2)=>{
        if(option.correct) correctIndex.push(index2);
        if(qna[index1].options[index2].isChecked){
           checkedIndex.push(index2);
           option.isChecked = true;
        }
      });
      if(_.isEqual(correctIndex,checkedIndex)){
        score += 5;
      }
    });
    return score;
  }
  const finalResult = calculatResult();
  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>Error</div>}
      {answer && answer.length>0 && (
        <>
        <Summary score={finalResult} noq={answer.length}  /> 
        <Analysis answers={answer} />
        </>
      )}
        
    </>
  )
}
