import React,{useState} from 'react'

function ReadMore({ children, maxCharecterCount = 100, summary }) {
  const text = summary;
  const result = text.slice(0, 100);

  return <p>{result}</p>;
}

export default ReadMore
