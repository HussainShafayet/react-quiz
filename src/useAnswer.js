import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useState, useEffect } from "react";

export default function useAnswer(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    async function fetchAnswer() {
      let db = getDatabase();
      let answerRef = ref(db, "answers/" + videoID + "/questions");
      let queryAnswer = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        let result = await get(queryAnswer);
        setLoading(false);
        if (result.exists()) {
          setAnswer(result.val());
        } else {
          setLoading(false);
          setError(true);
        }
      } catch (error) {}
    }
    fetchAnswer();
  }, [videoID]);
  return { loading, error, answer };
}
