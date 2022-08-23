import React from 'react'
import Question from './Question'

export default function Analysis({answers}) {
  return (
    <div>
        Answer analysis
        <Question answers={answers}  />
    </div>
  )
}
