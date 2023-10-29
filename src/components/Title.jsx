import React from 'react'
import { useEffect } from 'react'

function Title({title, children}) {
    useEffect(() => {
        document.title = `Coffee Shop | ${title}`
    }, []);
  return children
}

export default Title
