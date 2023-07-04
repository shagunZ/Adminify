import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {Stacked,Pie,Button,LineChart,SparkLine} from '../components';
import { earningData,SparklineAreaData,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
      <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-40 rounded-xl w-full lg:w-80 p-8 pt-8 m-3 bg-hero-pattern bg-no-repeat big-cover bg-center'>
<div className='flex justify-between items-center'>
<div>
  <p className='font-bold text-green-500'>Earnings</p>
  <p className='text-2xl'>$94572.80</p>
</div>
</div>
    <div className='mt-6'>
    <Button 
    color="white"
    bgColor="blue"
    text="Download"
    borderRadius="10px"
    />
    </div>
      </div>

    <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
{earningData.map((item)=>{
  <div key={item.title} className='bg-white h-44dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-3 pt-8 rounded-2xl'>
      <button type='button' style={{color:item.iconColor,backgroundColor:item.iconBg}} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
        {item.icon}
      </button>
<p className='mt-3'>
  <span className='text-lg font-semibold'>
  {item.amount}
  </span>
  <span className={`text-sm text-${item.pcColor} ml-2`}>
  {item.percentage}
  </span>
</p>
<p className='text-sm text-gray-400 mt-1'>{item.title}</p>
  </div>
})}
    </div>
      </div>

{/* revenue section  */}

<div className="flex gap-10 flex-wrap justify-center">
  <div className='bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
    <div className='flex justify-between'>
      <p className='font-semibold text-xl'>Revenue section it is</p>
      <div className='flex items-center gap-4'> 
      <p>
        <span><GoPrimitiveDot/></span>
        <span>Expense</span>
      </p>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default Ecommerce