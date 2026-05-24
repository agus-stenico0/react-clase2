import { IonIcon } from '@ionic/react'
import { search } from 'ionicons/icons'
import { Link } from 'react-router-dom'

export function Sidebar({ categorias }) {
    return (
        <aside className="bg-white text-lg rounded-3xl w-full max-w-6xl mx-auto p-2 flex items-center justify-between">    
            <Link className='bg-blue-600 px-2 py-1 rounded-3xl text-white' to='/blog'>Todos los posts</Link>
            {categorias.map((categoria, index) => (
                <p className="text-black"
                    key={index}
                >
                    {categoria}
                </p>
            ))}
            <p>|</p>
            <div className='bg-blue-100 p-2 border-none rounded-3xl flex items-center gap-1.5'> 
                <IonIcon icon={search}/>
                <input type="search" placeholder='Buscar un post...' />

            </div>
            
        </aside>
    )
}