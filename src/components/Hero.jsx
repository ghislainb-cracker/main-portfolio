const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Hero = () => {
    return (
        <>
            <div id="home" className="w-full min-h-[calc(100vh-100px)]">

                {/* MOBILE HERO */}
                <div className="md:hidden flex flex-col items-center justify-center text-center px-5 pt-8">

                    <img
                        src="/my-pic.jpeg"
                        alt="Ghislain"
                        className="hero-photo reveal reveal-scale h-62 w-62 rounded-full border border-white bg-[#4d77ff] shadow-lg object-cover brightness-75"
                    />


                    <h1 className="reveal text-3xl text-[#80db66] font-bold mt-8 tracking-wide" style={{ "--d": "120ms" }}>
                        Ghislain Byimbo
                    </h1>


                    <p className="reveal text-slate-500 dark:text-gray-400 text-[14px] mt-5 font-medium leading-relaxed" style={{ "--d": "220ms" }}>
                        I build software today with the ambition to build technology companies tomorrow
                    </p>


                    <button
                        type="button"
                        onClick={scrollToContact}
                        className="
                        hero-cta
                        reveal
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
                        hover:scale-105
                        transition-all
                        duration-500
                    "
                        style={{ "--d": "320ms" }}
                    >
                        Say hello 🙌
                    </button>

                </div>



                {/* DESKTOP HERO */}
                <div className="hidden md:flex w-full h-[calc(100vh-100px)]">

                    <div className="w-1/2 h-full flex flex-col justify-center">
                        <div className="ml-9">

                            <div>
                                <h3 className="reveal text-2xl text-slate-900 dark:text-white font-bold">
                                    HELLO I'M
                                </h3>

                                <h1 className="reveal text-8xl text-[#80db66] font-bold tracking-wide" style={{ "--d": "120ms" }}>
                                    Ghislain <br />
                                    <span className="ml-32">
                                        Byimbo
                                    </span>
                                </h1>
                            </div>


                            <div className="reveal flex gap-3 text-slate-900 dark:text-white mt-11 items-center" style={{ "--d": "220ms" }}>
                                <h3 className="text-2xl font-medium">
                                    A Passionate
                                </h3>

                                <span className="text-[#80db66] text-3xl font-bold">
                                    Frontend Developer
                                </span>
                            </div>


                            <div className="reveal text-slate-500 dark:text-gray-400 mt-4" style={{ "--d": "300ms" }}>
                                <h3 className="font-medium text-[14px]">
                                    I build software today with the ambition to build technology companies tomorrow.
                                </h3>
                            </div>


                            <button
                                type="button"
                                onClick={scrollToContact}
                                className="
                                hero-cta
                                reveal
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
                                hover:scale-105
                                transition-all
                                duration-500
                            "
                                style={{ "--d": "400ms" }}
                            >
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
                                    hero-photo
                                    reveal
                                    reveal-scale
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
                            ].map((icon, index) => (
                                <div
                                    key={icon}
                                    className="
                                        social-orb
                                        reveal
                                        rounded
                                        h-12
                                        w-12
                                        border
                                        border-slate-700
                                        bg-slate-900
                                        dark:bg-transparent
                                        dark:border-white
                                        flex
                                        justify-center
                                        items-center
                                        cursor-pointer
                                        hover:bg-[#4d77ff]
                                        hover:border-none
                                    "
                                    style={{ "--d": `${280 + index * 80}ms` }}
                                >
                                    <img
                                        src={`/${icon}`}
                                        href=""
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
