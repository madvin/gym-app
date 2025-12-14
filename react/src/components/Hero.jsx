export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <div className='text-center padding-4'>
        <p className=''>IT'S TIME TO</p>
        <h1>stand <span className='text-blue-600'>UP</span> and <span className='text-blue-600'>train hard</span></h1>
         </div>
        <p className='text-blue-600'>YOUR WORKOUT</p>
        <button className='px-8 py-4 rounded-medium'>
            <p>Accept</p>
        </button>
    </div>
  );
}