import React from "react";

export default function ServiceCard({serviceNumber, serviceName, Service_description, delay = 0}){
    return(
        <div
            className="reveal group relative px-4 py-7 border border-slate-200 bg-white dark:bg-transparent dark:border-white/20 text-slate-700 dark:text-gray-200 
  transition-all duration-300 ease-out
  hover:-translate-y-2 hover:border-[#80db66]/60
  hover:shadow-[0_10px_30px_rgba(139,207,122,0.15)]"
            style={{ "--d": `${delay}ms` }}
        >

                        {/* corner accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 bg-[#80db66] 
    transition-all duration-300 group-hover:scale-125" />

                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#80db66] 
    transition-all duration-300 group-hover:scale-125" />

                        {/* icon */}
                        <div className="flex items-center gap-2">
                        <div className="w-14 h-14 bg-emerald-50 dark:bg-[#1c2a1f] flex items-center justify-center mb-6 
    transition-all duration-300 group-hover:bg-emerald-100 dark:group-hover:bg-[#243529]">

        

                            <span className="text-2xl text-[#80db66] 
      transition-transform duration-300 group-hover:scale-110 monoton-regular">
                                {serviceNumber}
                                
                            </span>
                        </div>
                        <h2 className="text-lg font-bold mb-4 
    transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">
                            {serviceName}
                        </h2>
                        </div>

                        {/* description */}
                        <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed 
    transition-colors duration-300 group-hover:text-slate-600 dark:group-hover:text-gray-300">
                            {Service_description}
                        </p>
                    </div>
    )
}