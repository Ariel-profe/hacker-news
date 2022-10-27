

import { useContext } from 'react'
import { NewsContext } from '../context/NewsContext';

export const Buttons = () => {

  const {handlePage, nbPages, page, isLoading} = useContext(NewsContext);

  return (
    <div className='btn-container'>
      <button
        onClick={() => handlePage('dec')}
        disabled={isLoading}
      >prev</button>
      <p>{page + 1} of {nbPages}</p>
      <button
        onClick={() => handlePage('inc')}
        disabled={isLoading}
      >next</button>
    </div>
  )
}
