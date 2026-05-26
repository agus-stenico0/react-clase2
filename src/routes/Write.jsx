import ReactQuill from 'react-quill-new'
import 'quill/dist/quill.snow.css'
import { useState } from 'react'

export function Write() {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefaul()
    }
    return (
        <div className='bg-indigo-100 h-screen overflow-hidden flex flex-col gap-6'>
            <section className='px-16'>
                <h1 className="text-cl font font-light">Crear un nuevo post</h1>
                <form onClick={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6"> 
                    <input 
                        className="text-4xl font-semibold bg-transparent outline-none" 
                        type="text" 
                        placeholder="Mi historia increible..." 
                        name="title"
                    />

                    <div>
                        <label htmlFor="" className="text-sn">Elige una categoria:</label>

                        <select name="category" className="p-2 rounded-xl bg-white shadow-md">
                            <option value="general">General</option>
                            <option value="web-design">Diseño web</option>
                            <option value="tecnologia">Desarrollo</option>
                            <option value="databases">Base de datos</option>
                            <option value="seo">Motor de busqueda</option>
                            <option value="marketing">Marketing</option>
                        </select>
                    </div>

                    <textarea className='p-4 rounded-xl bg-white shadow-md' name="desc" placeholder="Una breve descripcion"></textarea>

                    <div className='flex flex-1'>
                        <ReactQuill 
                            theme='snow' 
                            value={value} 
                            onChange={setValue} 
                            className='h-48 shadow-md bg-white rounded-xl flex flex-1'/
                        >
                    </div>
                    <button className='bg-blue-700 w-36 mt-4 font-medium text-white px-6 py-2 rounded-xl'>Publicar</button>
                </form>
            </section>
        </div>
    )
}