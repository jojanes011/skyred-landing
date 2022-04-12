import React from 'react';
import CountUp from 'react-countup';

const Experience = () => {
  return <div className='bg-experience bg-cover flex md:flex-row flex-col justify-around py-8 px-4 md:px-16 lg:px-48 space-y-4 md:space-y-0'>
      <Statistics number={23} title='clientes' />
      <Statistics number={103} title='trabajos exitosos' />
      <Statistics number={4} title='años de experiencia' />
  </div>;
};

interface StatisticsInterface {
    number: number,
    title: String
}

const Statistics = ({number = 0, title = ''}: StatisticsInterface) => (
    <div className='flex flex-col text-center text-white'>
        <p className='text-6xl lg:text-8xl font-bold'>+<CountUp duration={1} end={number} /></p>
        <p className='uppercase'>{title}</p>
    </div>
)

export default Experience;
