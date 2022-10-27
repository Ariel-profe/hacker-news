import React from 'react'
import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

export const SearchForm = () => {

  const {handleSearch, query} = useContext(NewsContext);

  return (
    <form
      className='search-form'
      onSubmit={ (e) => e.preventDefault()}
    >
      <h2>search hacker news</h2>
      <input
      className='form-input'
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        value={query}
      />
    </form>
  )
}
