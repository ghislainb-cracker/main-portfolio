import { useEffect } from 'react';

export const Hero = () => {
    useEffect(() => {
        const typed = new Typed("#animated-text", {
            strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
            typeSpeed: 150,
            backSpeed: 90,
            loop: true
        });


        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="flex w-full h-[calc(100vh-100px)]">
                <div className="w-1/2 h-full flex flex-col justify-center">
                    <div className="ml-9">
                        <div>
                            <h3 className="text-2xl text-white font-bold">HELLO I'M</h3>
                            <h1 className="text-8xl text-[#80db66] font-bold tracking-wide">Ghislain <br /><span className="ml-32">Byimbo</span></h1>
                        </div>
                        <div className="flex gap-3 text-white mt-11 items-center">
                            <h3 className="text-2xl font-medium">A Passionate</h3>
                            <span id="animated-text" className="text-[#80db66] text-3xl font-bold"></span>
                        </div>
                        <button className='mt-11 py-2 px-8 text-white font-medium text-lg rounded-lg cursor-pointer flex items-center bg-gradient-to-r from-[#4d77ff] to-[#4b6cff] hover:from-purple-600 hover:to-violet-500 transition-all duration-1000'>Say hello 🙌</button>

                    </div>
                </div>
                <div className="w-1/2 h-full flex items-center justify-between pr-2">
                    <div className='h-full w-135  flex justify-center items-center shadow-md card relative'>
                        <img src="/my-pic.jpeg" alt="" className='brightness-60 h-90 w-90 rounded-full border border-white bg-[#4d77ff] shadow-lg object-cover' />
                        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
                    </div>
                    <div className='block space-y-4 right-0'>
                        <div className='rounded h-12 w-12 border border-white flex justify-center items-center cursor-pointer hover:bg-[#4d77ff] hover:border-none'>
                            <img src="/facebook.png" alt="" className='h-5 w-5 object-contain' />
                        </div>
                        <div className='rounded h-12 w-12 border border-white flex justify-center items-center cursor-pointer hover:bg-[#4d77ff] hover:border-none'>
                            <img src="/github.png" alt="" className='h-5 w-5 object-contain' />
                        </div>
                        <div className='rounded h-12 w-12 border border-white flex justify-center items-center cursor-pointer hover:bg-[#4d77ff] hover:border-none'>
                            <img src="/linkedIn.png" alt="" className='h-5 w-5 object-contain' />
                        </div>
                        <div className='rounded h-12 w-12 border border-white flex justify-center items-center cursor-pointer hover:bg-[#4d77ff] hover:border-none'>
                            <img src="/twitter.png" alt="" className='h-5 w-5 object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}