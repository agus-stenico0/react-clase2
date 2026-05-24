
export function Hero() {
    return(
        <div className='flex flex-col gap-3'>
            <div>
                <span>Inicio</span> 
                <span className='mx-2'>-</span>
                <span className='text-blue-400'>Blogs y Articulos</span>
            </div>
            <h1 className='text-5xl font-bold '>Tu fuente de conocimiento <br /> sobre desarrollo web y <br /> tecnología.</h1> 
            <p>Articulos, tutoriales y guías escritos por desarrolladores para desarrolladores.</p>   
        </div>
    )
}