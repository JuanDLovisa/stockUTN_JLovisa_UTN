const ProductForm = () => {

    async function handleSubmit(e){
        e.preventDefault()
        console.log("Cargando productos")
    }

    return(
        <form onSubmit={handleSubmit}>
            <button className="p-2 rounded bg-slate-900 text-white font-bold">Enviar</button>
        </form>
    )
}

export default ProductForm