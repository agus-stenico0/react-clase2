

export function ArticleCard({ post }){
    return (
        <article className="bg-transparent px-16 my-2.5 rounded-xl overflow-hidden flex flex-row items-center w-full">
            <img
                src={post.img}
                alt={post.title}
                className="w-80 h-42 rounded-2xl object-cover "
            />

            <div className="p-4 flex flex-col gap-2">                
                <h2 className="text-4xl font-bold mt-2">
                    {post.title}
                </h2>

                <div className="flex gap-2 mt-4">
                    <span className="text-sm text-gray-400">
                        Escrito por <span className="text-blue-500">{post.user.username}</span> en <span className="text-blue-500">{post.category}</span>
                    </span>
                </div>

                <p className="text-black-600 mt-2">
                    {post.desc}
                </p>
                <a className="text-blue-500 underline" href="">Leer mas</a>
            </div>
        </article>
    )
}