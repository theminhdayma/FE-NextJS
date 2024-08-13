import React from 'react'

interface Props {
    children: any
    type: any
}

export default function CaseButton({ type, children }: Props) {
  return (
    <div>
        <button className='buttonCart'>{children}</button>
    </div>
  )
}
