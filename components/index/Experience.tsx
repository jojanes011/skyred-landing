import React from 'react';

const Experience = () => {
  return <div className='bg-experience bg-cover flex md:flex-row flex-col justify-around py-8 px-4 md:px-48 space-y-4 md:space-y-0'>
      <Statistics number={23} title='clientes' />
      <Statistics number={103} title='trabajos exitosos' />
      <Statistics number={4} title='años de experiencia' />
  </div>;
};

interface StatisticsInterface {
    number: Number,
    title: String
}

const Statistics = ({number = 0, title = ''}: StatisticsInterface) => (
    <div className='flex flex-col text-center text-white'>
        <p className='text-8xl font-bold'>+{number}</p>
        <p className='uppercase'>{title}</p>
    </div>
)

export default Experience;
