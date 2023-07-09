import React from 'react'
import DetailCard from '../components/DetailCard';

const Product1 = ({subSection}) => {
  return (
    <div className='flex flex-col gap-14 py-10'>
        {subSection.map((data, index)=>(
            <DetailCard data={data} key={index} rev={index%2!==0}/>
        ))}
    </div>
  )
}

export default Product1;