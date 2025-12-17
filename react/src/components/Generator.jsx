import { useState } from 'react';

import SectionWrapper from './SectionWrapper';
import { WORKOUTS } from '../utils/exercises';
import { SCHEMES } from '../utils/exercises';

function Header(props) {

  const { index, title, description } = props;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator() {

  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState('strength_power');

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
        <SectionWrapper header={'generate your workout'} title={[ 'It\'s', 'Huge', 'o\'clock']}>
           <Header 
            index={'01.'} 
            title={'Choose your focus areas'}
            description={'Select the workout for the session.'}
           />

           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
              {Object.keys(WORKOUTS).map((type,typeIndex) => {
            return (
              <button onClick={() => {
                setPoison(type)
              }} className={'bg-slate-950 border-2 border-blue-500 hover:bg-slate-700 text-white p-4 rounded-lg ' + (type === poison ? 'border-blue-800' : 'border-blue-300')} key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
              </button>
            )
           })}
           </div>

            <Header 
            index={'02.'} 
            title={'Lock on targets'}
            description={'Select the muscle groups or workout types you want to target during your session.'}
           />

           <div className='bg-slate-900 py-3 border border-solid border-blue-500 rounded-lg p-4 flex flex-col gap-4'>
              <button onClick ={toggleModal} className='relative p-3 flex items-center justify-between'>
                <p>Select Muscle groups</p>
                <i className="fa-solid fa-caret-down"></i>
              </button>
              {showModal && (
                <div>modal</div>
                )}
           </div>

            <Header 
            index={'03.'} 
            title={'Choose your target goal'}
            description={'Select the primary goal for your workout session.'}
           />

           <div className='grid grid-cols-3 gap-4'>
              {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
            return (
              <button className='bg-slate-950 border border-blue-500 hover:bg-slate-700 text-white p-4 rounded-lg' key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
              </button>
            )
           })}
           </div>
        </SectionWrapper>
  );
}