import SectionWrapper from './SectionWrapper';

export default function Generator() {
  return (
        <SectionWrapper header={'generate your workout'} title={[ 'It\'s', 'Huge', 'o\'clock']}>
           <p> Something here to render as children </p>
        </SectionWrapper>
  );
}