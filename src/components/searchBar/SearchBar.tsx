import { BiSearch } from 'react-icons/bi'
import './searchbar.css'

export default function SearchBar() {
  return (
    <div className='searchbar-container'>
      <div className='searchbar-box'>
        <label htmlFor='searchbar-input'>
          <BiSearch className='react-icons' />
        </label>
        <input
          className='searchbar-input'
          id='searchbar-input'
          type="text"
          placeholder='Search photos'
        />
      </div>
    </div>
  )
}
