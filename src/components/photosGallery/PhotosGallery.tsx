import React, { useState, useEffect, KeyboardEvent } from 'react';
import axios from 'axios';

export default function PhotosGallery() {
  const ACCESS_KEY = import.meta.env.VITE_YOUR_ACCESS_KEY
  const [apiData, getApiData] = useState<any[]>([])
  const [searchPhotos, getSearchPhotos] = useState<string>('random')

  useEffect(() => {
    window.addEventListener('keydown', handleEnterSearch)
    return () => window.removeEventListener('keydown', handleEnterSearch)
  }, [])

  function handleEnterSearch(event: any): void {
    if (event.key === 'Enter') {
      console.log('ok')

    }
  }

  function getApi() {
    axios.get(`https://api.unsplash.com/search/photos?query=${searchPhotos}&client_id=${ACCESS_KEY}`)
      .then(res => {
        getApiData(res.data.results)
        console.log(res.data.results)
      })
  }

  return (
    <>
      <div>PhotosGallery</div>
      <button onClick={() => getApi()}>Click</button>
      <div className='gallery-display'>
        {apiData?.map(e => <img key={e.id} src={e.urls.small} />)}
      </div>
    </>

  )
}
