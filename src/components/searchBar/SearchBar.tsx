import React, { Dispatch } from 'react'
import { BiSearch } from 'react-icons/bi'
import './searchbar.css'

type MainProps = {
  searchItemInput: string;
  setSearchItemInput: React.Dispatch<React.SetStateAction<string>>;
  //setSearchItemInput: (value: string) => void;
}

export default function SearchBar(props: MainProps) {
  function enterHandle(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('right')
    }
  }

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
          onKeyDown={enterHandle}
          onChange={e => props.setSearchItemInput(e.target.value)}
        />
      </div>
    </div>
  )
}
