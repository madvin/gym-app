import { useState } from 'react';

import Button from './Button';
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
  const [goal, setGoal] = useState('strength_power');

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup));
      return;
    }
    if (muscles.length > 3) {
      return;
    }
    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false);
      return
    }
    
    setMuscles([...muscles, muscleGroup])
    if (muscles.length >= 2) {
      setShowModal(false);
      return;
    }
  }
  return (
        <SectionWrapper header={'Generate your workout'} title={[ 'It\'s', 'Huge', 'o\'clock']}>
           <Header 
            index={'01.'} 
            title={'Choose your focus areas'}
            description={'Select the workout for the session.'}
           />

           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
              {Object.keys(WORKOUTS).map((type,typeIndex) => {
            return (
              <button onClick={() => {
                setMuscles([]);
                setPoison(type)
              }} className={'bg-slate-950 border-2 border-blue-500 px-4 hover:bg-slate-700 text-white p-4 rounded-lg ' + (type === poison ? 'border-red-800' : 'border-blue-300')} key={typeIndex}>
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

           <div className='bg-slate-900 py-2 border border-solid border-blue-500 rounded-lg p-4 flex flex-col gap-2'>
              <button onClick ={toggleModal} className='relative p-2 flex items-center justify-between'>
                <p className='capitalize text-blue-500'>{muscles.length === 0 ? 'Select Muscle groups' : muscles.join(', ')}</p>
                <i className="fa-solid absolute right-3 top-1/2 translate-y-1/2 fa-caret-down"></i>
              </button>
              {showModal && (
                <div className='flex flex-col px-3 pb-3'>
                {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                  return (
                    <button onClick={() => {
                      updateMuscles(muscleGroup);
                    }} key={muscleGroupIndex} className={'hover:text-blue-500 duration-200 px-4 ' + (muscles.includes(muscleGroup) ? 'text-red-500' : ' ')}>
                      <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                    </button>
                  )
                })}
                </div>
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
            <button onClick={() => {
                setGoal(scheme)
              }} className={'bg-slate-950 border-2 border-blue-500 hover:bg-slate-700 text-white p-4 rounded-lg px-4 ' + (scheme === goal ? 'border-red-800' : 'border-blue-300')} key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
              </button>
            )
           })}
           </div>
           <Button text={'Formulate'}></Button>
        </SectionWrapper>
  );
}

//!! TODO APP