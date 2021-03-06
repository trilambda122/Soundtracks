import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import { useHistory } from "react-router-dom";

export default function ResultsItemList(props) {

  const {setSelectedResult} = useContext(SoundtrackContext)
  const history = useHistory()  

  const handleClick = (item)=>{
   
    // set the selected item in state to other pages can read it 
    setSelectedResult(item)
    // determine if asset is a show or other, this will dictate the workflow needed and set to the proper url
    if (item.assetType === 'show'){
      history.push('/seasons')
    }
    else {
      history.push('/songs')
    }
  }



  
  return (
    <div>
      <li className="list-group-item list-item">
        <div className='row' onClick={()=>{handleClick(props.asset)}}>
          <div className='col-4 '><img className='ellipse ' src='/images/music-bullet.svg' alt='elipse'/> </div>
        
        <div className='col'><p className='text-capitalize headline-text lh-1'>{props.asset.assetName} </p>
        <p className=' subline-text text-capitalize  fw-light lh-1'>{props.asset.assetType}</p>
        </div>
       
        </div>
     
      </li>
    </div>
  )
}

