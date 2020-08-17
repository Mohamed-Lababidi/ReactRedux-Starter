import React from 'react'
import VideoListItem from '../components/video-list-item'
import { ProgressPlugin } from 'webpack';

const VideoList = ({props}) => {
    const {movieList} = props;
    return (
        <div>
            <ul>
                {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack}/>
            
                    })
                }
            </ul>
        </div>
    );
    function receiveCallBack(movie){
        props.callback(movie)
    }
    
}

export default VideoList;