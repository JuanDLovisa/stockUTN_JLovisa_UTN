import { useState, useEffect } from "react"

const ProductList = () => {
    const [list,setList] = useState([])

    useEffect(()=>{
        async function loadProducts(){
            try{
                const req = await fetch("http://localhost:3000")
                const res = await req.json()

                console.log(res)
            }
            catch{
                console.log("Ocurrio un error")
            }
        }
        loadProducts()
    },[])

    return(
        <div>product list</div>
    )
}

export default ProductList