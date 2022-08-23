import React from 'react'

export default function Summary({score,noq}) {
  return (
    <div>
        Your Score is {score} out of { noq*5 }
    </div>
  )
}
