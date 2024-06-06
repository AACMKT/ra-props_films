import { useState } from 'react'
import Preview from './Preview'
import Tag from './Tag'
import Favorite from './Favorite'
import Share from './Share'
import Stars from './Stars'
import MoreLink from './MoreLink'

function Film({info}) {
  const [isChecked, switchFavorite] = useState(false);
    const onSet = () => {
      switchFavorite(() => {

          return !isChecked
      })
    }
  return (
    <div className="card u-clearfix">

      <div className="card-media">
        <img src={info.poster} alt="" className="card-media-img" />
        <Preview />
        <Tag title={info.type} color={info.color} />
      </div>

      <div className="card-body">
        <h2 className="card-body-heading">{info.title}</h2>
        <div className="card-body-options">
          <Favorite isChecked={isChecked} onSet = {onSet}/>
          <Share />
        </div>
        <Stars count={info.stars} id={info.id} />
        <a href="#/" className="card-button card-button-cta">
          Купить {info.price}₽
        </a>
        <a href="#/" className="card-button card-button-link">
          Подробнее
          <MoreLink />
        </a>
      </div>

    </div>
  );
}

export default Film