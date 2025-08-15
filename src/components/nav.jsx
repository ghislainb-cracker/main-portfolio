import { BiSolidMoon} from "react-icons/bi"

export const Nav = () => {
    return(
        <>
        <div className="flex justify-center items-center">
          <nav className="h-20 bg-[#4d77ff] flex justify-between items-center px-4 w-6xl rounded-lg">
            <img src="/ok.png" alt="" className="h-50 w-50 object-contain"/>
            <div className="flex">
                <ul className="flex gap-6 text-2xl text-white mr-8">
                    <li className="hover:text-green-500 transition-all duration-300 cursor-pointer font-medium">Home</li>
                    <li className="hover:text-green-500 transition-all duration-300 cursor-pointer font-medium">About Me</li>
                    <li className="hover:text-green-500 transition-all duration-300 cursor-pointer font-medium">Projects</li>
                    <li className="hover:text-green-500 transition-all duration-300 cursor-pointer font-medium">Skills</li>
                    <li className="hover:text-green-500 transition-all duration-300 cursor-pointer font-medium">Contact</li>
                </ul>

                <button className="h-8 w-8 border border-white flex justify-center items-center rounded-full bg-white cursor-pointer"><BiSolidMoon/> </button>
            </div>
          </nav>
          </div>
        </>
    )
}