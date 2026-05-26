import { Link } from "react-router-dom"
import logo from '../assets/appwise-academy.webp'

export function Navbar() {
    return (
        <nav className="bg-indigo-100 px-16 py-5 flex justify-between items-center w-full">
            <div className=" flex flex-row items-center gap-3.5">
                <img className="w-7" src={logo} alt="Logo Appwise"/>
                <span className="text-black font-bold text-2xl">Appwise</span>
            </div>
            <div className="font-normal text-lg ">
                <Link className="text-black mx-7" to='/'>Inicio</Link>
                <Link className="text-black mx-7" to='/blog'>Tendencias</Link>
                <Link className="text-black mx-7" to='/blog'>Más populares</Link>
                <Link className="text-black mx-7" to='/'>Nosotros</Link>
                          
                <Link className="bg-blue-700 text-white w-auto px-5 py-1 rounded-3xl" to='/login'>
                    Entrar
                </Link>
            </div>
        </nav>
    )
}