import { ArticleCard } from '../Components/ArticleCard'
import { Sidebar } from '../Components/Sidebar'
import { mockPosts } from '../data/mockData'
import { Hero } from '../Components/Hero'

export function Home() {
    return (
        <section className="bg-indigo-100 w-full flex flex-col items-start gap-6">
            <div className='px-16 flex gap-3 items-center w-full'>               
                <Hero/>   
            </div>
            <Sidebar
                categorias={['Diseño web', 'Desarrollo', 'Base de datos', 'Motores de Búsqueda', 'Marketing']}
            />
            
            <div className='w-full px-16 h-96 flex flex-row gap-4'>
                <div className='w-1/2 flex flex-col gap-2'>
                    <img
                        src={mockPosts[0].img}
                        alt={mockPosts[0].title}
                        className=" w-full rounded-xl object-cover"
                    />
                    <div className='flex gap-3'>
                        <p className='font-bold'>{mockPosts[0]._id}</p>
                        <p className='text-blue-600'>{mockPosts[0].category}</p>
                    </div>
                    <h1 className='text-2xl font-bold'>{mockPosts[0].title}</h1>
                </div>

                <div className='w-1/2 flex flex-col justify-between'>
                    <div className='flex flex-row gap-2'>
                        <img
                            src={mockPosts[1].img}
                            alt={mockPosts[1].title}
                            className="w-1/3 rounded-xl object-cover"
                        />
                        <div>
                            <div className='flex gap-3'>
                                <p className='font-bold'>{mockPosts[1]._id}</p>
                                <p className='text-blue-600'>{mockPosts[1].category}</p>
                            </div>
                            <h1 className='text-xl font-bold'>{mockPosts[1].title}</h1>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <img
                            src={mockPosts[2].img}
                            alt={mockPosts[2].title}
                            className="w-1/3 rounded-xl object-cover"
                        />
                        <div>
                            <div className='flex gap-3'>
                                <p className='font-bold'>{mockPosts[2]._id}</p>
                                <p className='text-blue-600'>{mockPosts[2].category}</p>
                            </div>
                            <h1 className='text-xl font-bold'>{mockPosts[2].title}</h1>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <img
                            src={mockPosts[3].img}
                            alt={mockPosts[3].title}
                            className="w-1/3 rounded-xl object-cover"
                        />
                        <div>
                            <div className='flex gap-3'>
                                <p className='font-bold'>{mockPosts[3]._id}</p>
                                <p className='text-blue-600'>{mockPosts[3].category}</p>
                            </div>
                            <h1 className='text-xl font-bold'>{mockPosts[3].title}</h1>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <h2 className='text-2xl px-16'>Artículos recientes</h2>
            
            {mockPosts.map(post => (
                <ArticleCard
                    key={post._id}
                    post={post}
                />
            ))}
        </section>

    )
}