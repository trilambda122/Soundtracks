import React,{useContext} from 'react'
import { useHistory } from "react-router-dom";
import SoundtrackContext from '../../context/soundtrackContext'

export default function EpisodeItemList(props) {
  const {setSelectedEpisode} = useContext(SoundtrackContext)
  const history = useHistory()  
  
  const handleClick = (item)=>{
    setSelectedEpisode(item)
    history.push('/show/songs')
  }
  
  return (
    <div>
    <li className="list-group-item list-item">
      <div className='row' onClick={()=>{handleClick(props.episodedetail)}}>
        <div className='col-4'><img className='ellipse ' src='/images/music-bullet.svg' alt='elipse'/> </div>
      
      <div className='col'><p className='text-capitalize subline-text lh-1'>{props.episodedetail.assetName} </p>
      <p className=' subline-text text-capitalize fw-light lh-1'>Songs<p className="ms-2 badge bg-primary ">{props.episodedetail.assetSongs}</p></p>
      </div>
     
      </div>
    
    </li>
    </div>
  )
}
