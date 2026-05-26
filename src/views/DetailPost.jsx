import { useParams } from "react-router-dom";
import { mockPosts } from "../data/mockData";
import { IonIcon } from '@ionic/react'
import { search } from 'ionicons/icons'
import { bookmarkOutline } from 'ionicons/icons'
export function DetailPost() {
  const { id } = useParams();

  const post = mockPosts.find((p) => p._id === id);

  if (!post) return <p>Post no encontrado</p>;

  return (
    <div>
        {/* PRIMERA SECCION(HERO) */}
        <div className="bg-indigo-100 px-16 flex flex-col gap-6">
            <div className="flex justify-between">
                <div className="w-1/2 flex flex-col gap-6">
                    <h1 className="text-4xl font-medium">{post.title}</h1>
                    <span className="text-ls text-gray-400">
                        Escrito por <span className="text-blue-500">{post.user.username}</span> en <span className="text-blue-500">{post.category}</span>
                    </span>
                    <p className="text-gray-500 text-justify font-medium">{post.desc}</p>

                </div>

                <img src={post.img} className="mt-4 rounded-xl w-lg" />
            </div>
            
            {/* SEGUNDA SECCION (PARRAFO Y ASIDE) */}
            <div className=" flex  gap-6">
                <div className="w-1/2 text-xl text-justify space-y-6" dangerouslySetInnerHTML={{ __html: post.content }} />

                <aside className=" w-1/2 h-screen pl-14 flex flex-col gap-5 sticky top-8 self-start">
                    <span>Autor</span>
                    <div className="flex items-center gap-6">
                        <img src={post.user.img} alt="" className="w-12 rounded-full"/>
                        <span className="text-blue-700">{post.user.username}</span>
                    </div>
                    <span className="text-gray-400 text-justify">
                        Apasionado por la tecnologia y el desarrollo web.
                    </span>
                    <span>Acciones</span>
                    <IonIcon icon={bookmarkOutline}/>
                    <div className="flex flex-col gap-2 ">
                        <h4>Categorías</h4>
                        <a className="underline text-gray-800" href="">Todas</a>
                        <a className="underline text-gray-800" href="">Diseño Web</a>
                        <a className="underline text-gray-800" href="">Desarrollo</a>
                        <a className="underline text-gray-800" href="">Base de Datos</a>
                        <a className="underline text-gray-800" href="">Motores de Búsqueda</a>
                        <a className="underline text-gray-800" href="">Marketing</a>
                    </div>

                    <h3 className="font-normal">Buscar</h3>
                    <div className='bg-white w-full p-2 border-none rounded-3xl flex items-center gap-1.5'> 
                        <IonIcon icon={search} className="cursor-pointer"/>
                        <input type="search" className="w-full" placeholder='Buscar un post...' />                
                    </div>
                </aside>

            </div>
            {/* SECCION COMENTARIOS */}
            <div className="w-2xl pb-16 flex flex-col gap-6">
                <h1 className="text-gray-500 text-2xl underline font-normal">Comentarios</h1>
                <div className="flex items-center gap-5">
                    <textarea 
                        className="bg-white w-full p-4 rounded-xl"
                        placeholder="Escribe un comentario...">
                    </textarea>
                    <button className="bg-blue-700 text-white font-medium rounded-xl px-5 py-3">Enviar</button>

                </div>
            </div>
        </div>
        
    </div>
  );
}