import React from 'react';

const Test = ({listName}) => {
  const card = listName.map(({title,description,images},idx) => (
    <div key={idx}>
      {images.map((elemt , i) => (
          <img src={elemt} alt="" key={i}/>
      ))}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
))
  return (
    <>
        {card}
    </>
  );
}

export default Test;
