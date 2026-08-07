import { useEffect } from 'react';
// import Typed from 'typed.js';

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
            <div className="w-full min-h-[calc(100vh-100px)]">

                {/* MOBILE HERO */}
                <div className="md:hidden flex flex-col items-center justify-center text-center px-5 pt-8">

                    {/* Image first */}
                    <img 
                        src="/my-pic.jpeg" 
                        alt="Ghislain"
                        className="h-56 w-56 rounded-full border border-white bg-[#4d77ff] shadow-lg object-cover brightness-75"
                    />


                    {/* Name inline */}
                    <h1 className="text-5xl text-[#80db66] font-bold mt-8 tracking-wide">
                        Ghislain Byimbo
                    </h1>


                    {/* Subtitle */}
                    <p className="text-gray-400 text-lg mt-5 font-medium leading-relaxed">
                        I build clean, responsive, and purposeful digital experiences.
                    </p>


                    {/* CTA */}
                    <button className="
                        mt-8 
                        py-3 
                        px-10 
                        text-white 
                        font-medium 
                        text-lg 
                        rounded-lg 
                        cursor-pointer
                        bg-gradient-to-r 
                        from-[#4d77ff] 
                        to-[#4b6cff]
                        hover:from-purple-600 
                        hover:to-violet-500
                        transition-all 
                        duration-1000
                    ">
                        Say hello 🙌
                    </button>

                </div>



                {/* DESKTOP HERO */}
                <div className="hidden md:flex w-full h-[calc(100vh-100px)]">

                    <div className="w-1/2 h-full flex flex-col justify-center">
                        <div className="ml-9">

                            <div>
                                <h3 className="text-2xl text-white font-bold">
                                    HELLO I'M
                                </h3>

                                <h1 className="text-8xl text-[#80db66] font-bold tracking-wide">
                                    Ghislain <br />
                                    <span className="ml-32">
                                        Byimbo
                                    </span>
                                </h1>
                            </div>


                            <div className="flex gap-3 text-white mt-11 items-center">
                                <h3 className="text-2xl font-medium">
                                    A Passionate
                                </h3>

                                <span 
                                    id="animated-text" 
                                    className="text-[#80db66] text-3xl font-bold"
                                ></span>
                            </div>


                            <div className="text-gray-400 mt-4">
                                <h3 className="font-medium text-lg">
                                    I build clean, responsive, and purposeful digital experiences.
                                </h3>
                            </div>


                            <button className="
                                mt-11 
                                py-2 
                                px-8 
                                text-white 
                                font-medium 
                                text-lg 
                                rounded-lg 
                                cursor-pointer
                                flex 
                                items-center 
                                bg-gradient-to-r 
                                from-[#4d77ff] 
                                to-[#4b6cff]
                                hover:from-purple-600 
                                hover:to-violet-500 
                                transition-all 
                                duration-1000
                            ">
                                Say hello 🙌
                            </button>

                        </div>
                    </div>



                    <div className="w-1/2 h-full flex items-center justify-between pr-2">

                        <div className="h-full w-135 flex justify-center items-center shadow-md card relative">
                            <img 
                                src="/my-pic.jpeg" 
                                alt=""
                                className="
                                    brightness-60 
                                    h-90 
                                    w-90 
                                    rounded-full 
                                    border 
                                    border-white 
                                    bg-[#4d77ff] 
                                    shadow-lg 
                                    object-cover
                                "
                            />
                        </div>


                        <div className="block space-y-4 right-0">

                            {[
                                "facebook.png",
                                "github.png",
                                "linkedIn.png",
                                "twitter.png"
                            ].map((icon) => (
                                <div 
                                    key={icon}
                                    className="
                                        rounded 
                                        h-12 
                                        w-12 
                                        border 
                                        border-white 
                                        flex 
                                        justify-center 
                                        items-center 
                                        cursor-pointer 
                                        hover:bg-[#4d77ff] 
                                        hover:border-none
                                    "
                                >
                                    <img 
                                        src={`/${icon}`} 
                                        alt=""
                                        className="h-5 w-5 object-contain"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};