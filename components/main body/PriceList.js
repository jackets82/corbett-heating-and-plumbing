import React from 'react'
import Price from './Price'

function PriceList() {
  return (
    <div className=' grid grid-cols-2 gap-20'>
        <Price service='Toilet' price='500' image='toilet'/>
        <Price service='Shower' price='5000'image='shower'/>
        <Price service='One tap' price='100' image='tap'/>
        <Price service='Another toilet' price='200' image='toilet'/>
    </div>
  )
}

export default PriceList