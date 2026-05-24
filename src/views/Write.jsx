
export function Write() {
    return (
        <div>
            <h1 className="text-cl font font-light">Crear un nuevo post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6"> 
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
                        <option value="development">Desarrollo</option>
                        <option value="databases">Base de datos</option>
                        <option value="seo">Motor de busqueda</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>

                <textarea name="desc" placeholder="Una breve descripcion"></textarea>
            </form>
        </div>
    )
}