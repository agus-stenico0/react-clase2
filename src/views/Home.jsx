import { ArticleCard } from '../Components/ArticleCard'
import { Navbar } from '../Components/Navbar'
import { Sidebar } from '../Components/Sidebar'
import { mockPosts } from '../data/mockData'
import { Link } from 'react-router-dom'
import { Hero } from '../Components/Hero'


export function Home() {
    return (
        <section className="bg-blue-100 w-full flex flex-col items-start gap-6">
            <Navbar/>
            <div className='px-16 flex gap-3 items-center w-full'>               
                <Hero/>
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
                    <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
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
            <h2 className='text-xl px-16'>Artículos recientes</h2>
            {mockPosts.map(post => (
                <ArticleCard
                    key={post._id}
                    post={post}
                />
            ))}
        </section>

    )
}