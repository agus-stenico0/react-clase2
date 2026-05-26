import { Link } from "react-router-dom"
export function Hero() {
    return(
        <div className='bg-indigo-100 w-full flex items-center justify-between'>
            <div className="flex flex-col gap-5">
                <div>
                    <span>Inicio</span> 
                    <span className='mx-2'>-</span>
                    <span className='text-blue-400'>Blogs y Articulos</span>
                </div>
                <h1 className='text-6xl text-gray-800 font-bold '>Tu fuente de conocimiento <br /> sobre desarrollo web y <br /> tecnología.</h1> 
                <p className="text-xl">Articulos, tutoriales y guías escritos por desarrolladores para desarrolladores.</p> 

            </div>

            <div>
                <Link to="write" className="hidden md:block relative">
                    <svg
                        viewBox="0 0 200 200"
                        width="200"
                        height="200"
                        className="text-lg tracking-widests"
                    >
                        <path
                            id="circlePath"
                            fill="none"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                        <text>
                            <textPath href="#circlePath" startOffset="0%">
                                Escribe tu historia •
                            </textPath>
                            <textPath href="#circlePath" startOffset="50%">
                                Comparte tu idea •
                            </textPath>
                        </text>
                    </svg>
                    <button 
                        className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="50"
                            height="50"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        >
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>
                    </button>
                </Link>  
            </div>
        </div>
    )
}