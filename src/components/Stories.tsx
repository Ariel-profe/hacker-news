import { useContext } from "react"
import { NewsContext } from '../context/NewsContext';


export const Stories = () => {

  const {isLoading, hits, handleRemove} = useContext(NewsContext);


  if(isLoading){
    return <div className="loading"></div>
  }

  return (
    <section className="stories">
      {
        hits.map( ({objectID, title, num_comments, url, points, author}) => (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">{points} points by <span>{author}</span> | {num_comments} comments</p>
            <div>
              <a href={url} target='_blank' className='read-link'>read more</a>
              <button className="remove-btn" onClick={() => handleRemove(objectID)}> remove </button>
            </div>
          </article>
        ))
      }
    </section>
  )
}
