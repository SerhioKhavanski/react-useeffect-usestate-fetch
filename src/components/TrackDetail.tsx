import { useState,useEffect } from "react";
export function TrackDetail() {

    const [selectedTrack, setSelectedTrack] = useState(null)
    const selectedTrackId = "cb2fb8f4-0415-4a66-a287-cb97137f9f96"

    useEffect(()=>{
    
      if(!selectedTrackId){
        return
      }
    
          fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,{
              headers:{
                'api-key':'332f2e3f-8919-4562-981d-3178b715a51d'
              }
            }).then(res=>res.json())
            .then(json=>setSelectedTrack(json.data))
      },[selectedTrackId])

    return <div className="info">
            <h2>Details</h2>

            {!selectedTrack&&!selectedTrackId&&<span>Track is not selected</span>}
            {!selectedTrack&&selectedTrackId&&<span>Loading...</span>}
            {selectedTrack&&selectedTrackId&&selectedTrack.id!==selectedTrackId&&<span>Loading...</span>}
            {selectedTrack
            &&<div>
                <h3>{selectedTrack.attributes.title}</h3>
                <h4>Lyrics</h4>

                <p>
                  {selectedTrack.attributes.lyrics ?? 'no lyrics'}
                </p>
              </div>}
          </div>
}
