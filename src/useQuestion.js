import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import {useState, useEffect} from 'react';


export default function useQuestion(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [question, setQuestion] = useState([]);

  useEffect(()=>{
    async function fetchQuestion(){
        let db = getDatabase();
        let questionRef = ref(db,"quiz/" + videoID + "/questions");
        let queryQuestion = query(questionRef,orderByKey());
   
        try{
            setError(false);
            setLoading(true);
            let result = await get(queryQuestion);
            setLoading(false);
            if(result.exists()){
                setQuestion(result.val())
            }else{
                setLoading(false);
                setError(true);
            }
            
        }catch(error){

        }
    }
    
    fetchQuestion();
  },[videoID]);
  return {loading,error,question}
}
