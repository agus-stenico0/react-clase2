import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <div className='bg-indigo-100 min-h-screen flex flex-col'>
        <div className='flex-1 flex items-center justify-center'>
            <form action="#" className=' w-xs flex items-center flex-col gap-3'>
                <h2 className='text-2xl font-bold'>
                    Iniciar sesión
                </h2>
                <input className='bg-white border border-gray-300 rounded-xl p-3 w-full' 
                    type="email" 
                    placeholder='Correo electrónico' 
                />
                <input className='bg-white border border-gray-300 rounded-xl p-3 w-full' 
                    type="password" 
                    placeholder='Contraseña'
                />
                <button className='bg-blue-700 font-medium text-white rounded-xl p-2.5 w-full'>
                    Entrar
                </button>
                <p className='text-gray-400 flex gap-2'>¿No tienes cuenta? 
                    <Link className='text-blue-700 underline' to='/register'>Regístrate</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

