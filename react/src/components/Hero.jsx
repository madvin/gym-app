export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-12 items-center justify-center text-center max-w-[1200px] w-full mx-auto p-2'>
        <div className='slex flex-col gap-4'>
        <p className='text-blue-600 text-sm md:text-base font-light'>IT'S TIME TO</p>
        <h1 className='uppercase font-semibold text-5xl sm:text-6xl md:text-7xl'>stand <span className='text-blue-500'>UP</span> and <span className='text-blue-500'>train hard</span></h1>
         </div>
        <p>YOUR WORKOUT</p>
        <button className='px-8 py-4 rounded-medium'>
            <p>Accept</p>
        </button>
    </div>
  );
}