import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [selectedTracId, setSelectedTracId] = useState(null)
  const[tracks,setTraks]=useState(null)

  useEffect(()=>{
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks',{
      headers:{
        'api-key':'332f2e3f-8919-4562-981d-3178b715a51d'
      }
    }).then(res=>res.json())
    .then(json=>setTraks(json.data))
  },[])


  if(tracks === null){
    return(
      <>
        <h1>Musicfun Player, it-incubator-io</h1>
        <span>Loading...</span>
      </>
    )
  }

  if(tracks.length === 0){
    return(
      <>
        <h1>Musicfun Player, it-incubator-io</h1>
        <span>NoTracks</span>
      </>
    )

  }
 


  return (
    <>
    <h1>Musicfun Player, it-incubator-io</h1>
    <button type='button' onClick={()=>setSelectedTracId(null)}>reset selection</button>
      <ul className='music-list'>
        {tracks.map(track =>(
          <li style={{
            border: track.id===selectedTracId ? '1px solid orange': 'none'
          }}
            key={track.id}>
            <div onClick={()=>{
              setSelectedTracId(track.id)
            }} >{track.attributes.title}</div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
