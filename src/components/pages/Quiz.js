import { useEffect, useReducer, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useQuestion from '../../useQuestion';
import _ from 'lodash';
import { useAuth } from '../../contexts/AuthContext';
import { getDatabase, ref, set } from 'firebase/database';

const initialState = null;
const reducer = (state,action)=>{
  switch(action.type){
    case "questions":
      action.value.forEach((question)=>{
        question.options.forEach((option)=>{
          option.isChecked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state)
      questions[action.questionID].options[action.optionsID].isChecked = action.value;
      return questions;
    default:
      return state
  }
};
export default function Quiz() {
  let {id} = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const {loading, error, question} = useQuestion(id);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const {currentUser} = useAuth()
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch({
      type:"questions",
      value: question
    })
  },[question]);

  function handleChange(e,index){
    dispatch({
      type:"answer",
      questionID: currentQuestion,
      optionsID: index,
      value: e.target.checked
    });
  }
  function handleNext(){
    if(currentQuestion+1 < question.length){
      setCurrentQuestion((prev)=> prev + 1);
    }
  }
  function handlePrev() {
    if (currentQuestion >=1 &&  currentQuestion < question.length) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }
  async function submit(){
    let {uid} = currentUser;
    let db = getDatabase();
    let resultRef = ref(db, `result/${uid}`);
    await set (resultRef,{
      [id]: qna
    })
    navigate(`../result/${id}`,{
      state:{
        qna
      }
    })
  }

  const parcentage = question.length>0 ? parseInt(((currentQuestion+1)/ question.length) * 100) : 0;
  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>Something went wrong!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h6>Every question have multiple answers.</h6>
          <form>
            <Form.Group controlId="kindOfStand">
            {
              qna[currentQuestion].options.map((option,index)=>(
                <Form.Check
                  value={index}
                  type="checkbox"
                  checked={option.isChecked}
                  label={option.title}
                  onChange={(e) => handleChange(e,index)}
                />
              ))
            }
            </Form.Group>
          </form>
        </>
      )}

      <div className="progress mt-2 mb-2">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${parcentage}%` }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
          title={`${parcentage}% completed`}
        >
          {parcentage}
        </div>
      </div>
      <div className='d-flex justify-content-between align-items-center'>
          <span className='cursor-pointer' onClick={handlePrev}>Previous Question</span>
          <span style={{cursor:"pointer"}} onClick={parcentage === 100? submit:handleNext}>{parcentage === 100? 'Submit':'Next Question'}</span>
      </div>
    
    </>
  );
}
