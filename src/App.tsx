import { useState } from 'react'
import NavBar from './components/navBar/NavBar'
import SearchBar from './components/searchBar/SearchBar'
import PhotosGallery from './components/photosGallery/PhotosGallery'
import './App.css'

function App() {
  const [searchItemInput, setSearchItemInput] = useState<string>('random')
  const [apiData, setApiData] = useState('')

  return (
    <>
      <NavBar />
      <SearchBar searchItemInput={searchItemInput} setSearchItemInput={setSearchItemInput} />
      <PhotosGallery />
    </>

  )
}

export default App
