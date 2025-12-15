import SectionWrapper from './SectionWrapper';

function Header(props) {

  const { index, title, description } = props;

  return (
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default function Generator() {
  return (
        <SectionWrapper header={'generate your workout'} title={[ 'It\'s', 'Huge', 'o\'clock']}>
           <Header 
            index={'01.'} 
            title={'Choose your focus areas'}
            description={'Select the muscle groups or workout types you want to target during your session.'}
           />
        </SectionWrapper>
  );
}