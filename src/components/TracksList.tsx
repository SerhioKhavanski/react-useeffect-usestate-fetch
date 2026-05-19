import { useState,useEffect } from "react";
export function TracksList() {

    const [tracks,setTraks]=useState(null)
    const [selectedTrackId, setSelectedTrackId] = useState(null)

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
            <span>Loading...</span>
        </>
        )
    }

    if(tracks.length === 0){
        return(
        <>
            <span>No Tracks</span>
        </>
        )

    }
    
    return  <ul className='music-list'>
            {tracks.map(track =>(
              <li style={{
                border: track.id===selectedTrackId ? '1px solid orange': 'none'
              }}
                key={track.id}>
                <div onClick={()=>{
                  setSelectedTrackId(track.id)
                }} >{track.attributes.title}</div>
                <audio src={track.attributes.attachments[0].url} controls></audio>
              </li>
            ))}
          </ul>
}
