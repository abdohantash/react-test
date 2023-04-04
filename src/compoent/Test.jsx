import React from 'react';

const Test = ({listName,deleteBtns}) => {
  const card = listName.map(({title,description,thumbnail},idx) => (
    <div className='card' key={idx}>
      {/* {images.map((elemt , i) => (
          <img src={elemt} alt="" key={i}/>
      ))} */}
      <img src={thumbnail} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={(e) => deleteBtns(e,idx)}>حذف</button>
    </div>
))
  return (
    <>
    <div className="card-list">
    {card}
    </div>  
    </>
  );
}

export default Test;
