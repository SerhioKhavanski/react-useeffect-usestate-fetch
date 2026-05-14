import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [tracks,setTraks]=useState(null)

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
    <button type='button' onClick={()=>{
      setSelectedTrackId(null) 
      setSelectedTrack(null)
      }}>reset selection</button>

        <div className='player'>
          <ul className='music-list'>
            {tracks.map(track =>(
              <li style={{
                border: track.id===selectedTrackId ? '1px solid orange': 'none'
              }}
                key={track.id}>
                <div onClick={()=>{
                  setSelectedTrackId(track.id)

                   fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${track.id}`,{
                      headers:{
                        'api-key':'332f2e3f-8919-4562-981d-3178b715a51d'
                      }
                    }).then(res=>res.json())
                    .then(json=>setSelectedTrack(json.data))

                }} >{track.attributes.title}</div>
                <audio src={track.attributes.attachments[0].url} controls></audio>
              </li>
            ))}
          </ul>
          <div className="info">
            <h2>Details</h2>
            {selectedTrack===null?<span>Track is not selected</span>
            :selectedTrackId!==selectedTrack.id?<span>Loading...</span>
            :
              <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <h4>Lyrics</h4>

                <p>
                  {selectedTrack.attributes.lyrics ?? 'no lyrics'}
                </p>
              </div>
            }
          </div>
        </div>    
    </>
  )
}

export default App
