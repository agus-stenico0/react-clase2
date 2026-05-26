import { ArticleCard } from '../Components/ArticleCard'
import { mockPosts } from '../data/mockData'
import { IonIcon } from '@ionic/react'
import { search } from 'ionicons/icons'


export function Blog() {

    return (
        <section className='bg-indigo-100'>
            <h2 className='text-2xl px-16 pb-5'>Blog de Desarrollo</h2>

            <main className="w-full flex ">
                <div className="flex flex-col-reverse">
                    {mockPosts.map(post => (
                        <ArticleCard
                            key={post._id}
                            post={post}
                        />
                    ))}
                </div>

                <aside className=" w-xs p-7 mx-5 flex flex-col gap-3 sticky top-8 self-start">
                    <h3>Buscar</h3>
                    <div className='bg-white w-60 p-2 border-none rounded-3xl flex items-center gap-1.5'> 
                        <IonIcon icon={search}/>
                        <input type="search" placeholder='Buscar un post...' />                
                    </div>

                    <div className="flex flex-col">
                        <h4>Filtrar</h4>
                        <div className="flex gap-2">
                            <input type="checkbox" name="recientes" id="" />
                            <label htmlFor="recientes">Mas recientes</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" name="populares" id="" />
                            <label htmlFor="populares">Mas populares</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" name="tendencias" id="" />
                            <label htmlFor="tendencias">Tendencias</label>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" name="antiguos" id="" />
                            <label htmlFor="antiguos">Mas antiguos</label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <h4>Categorías</h4>
                        <a className="underline" href="">Todas</a>
                        <a className="underline" href="">Diseño Web</a>
                        <a className="underline" href="">Desarrollo</a>
                        <a className="underline" href="">Base de Datos</a>
                        <a className="underline" href="">Motores de Búsqueda</a>
                        <a className="underline" href="">Marketing</a>
                    </div>
                </aside>
            </main>
        </section>
    )
}