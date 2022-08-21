import { useEffect,useState } from 'react';
import { getDatabase, orderByKey, query, ref,get, startAt, limitToFirst } from 'firebase/database';

export default function useVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchData() {
        const db = getDatabase();
        const videoRef = ref(db, 'videos');
        const videoQuery = query(videoRef, orderByKey(), startAt("" + page),limitToFirst(8));
        try {
            setError(false)
            setLoading(true);
            const result = await get(videoQuery);
            setLoading(false);
            if(result.exists()){
                setVideos((prev)=>{
                    return [ ...prev, ...Object.values(result.val())];
                })
            }else{
                setHasMore(false);
            }
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    fetchData();
  } , [page]);
    return {loading, error, videos, hasMore}; 
}
