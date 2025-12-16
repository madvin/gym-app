import SectionWrapper from './SectionWrapper';

import { WORKOUTS } from '../utils/exercises';

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
              <button className='bg-slate-950 border border-blue-500 hover:bg-slate-700 text-white p-4 rounded-lg' key={typeIndex}>
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

           <div className='bg-slate-900 py-3 border border-solid border-blue-500 rounded-lg p-4'>
              <div className='relative flex items-center justify-between gap'>
                <p>Select Muscle groups</p>
                <i className="fa-solid fa-caret-down"></i>
              </div>
           </div>         
        </SectionWrapper>
  );
}