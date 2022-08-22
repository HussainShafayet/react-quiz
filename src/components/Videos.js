import React,{useState} from 'react';
import Video from './Video';
import {Link} from 'react-router-dom';
import useVideoList from '../useVideoList';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Videos() {
  const [page, setPage] = useState(1);
  const {loading, error, videos, hasMore} = useVideoList(page);
    
  return (
    <>
        {videos.length > 0 && (
          <InfiniteScroll
          style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}
            dataLength={videos.length}
            next={() => setPage(page + 8)}
            hasMore={hasMore}
          >
            {videos.map((video) => (
              <div className='mt-2'>
                <Link to={`quiz/${video.youtubeID}`} key={video.youtubeID}>
                  <Video
                    title={video.title}
                    id={video.youtubeID}
                    noq={video.noq}
                  />
                </Link>
              </div>
            ))}
          </InfiniteScroll>
        )}
        {}
        {loading && <div>Loading...</div>}
        {!loading && !error && videos.length === 0 && (
          <div className="col-12">
            <h3>No videos found</h3>
          </div>
        )}
        {error && (
          <div className="col-12">
            <h3>Something went wrong!</h3>
            <p>{error.message}</p>
          </div>
        )}
    </>
  );
}
