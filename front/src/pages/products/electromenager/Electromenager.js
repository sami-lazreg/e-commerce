import {useSelector} from 'react-redux'
import {useState} from 'react'
import OneProduct from '../../oneProduct';
import Pagination from '../Pagination'



function Electromenager() {
    const [currentPage,setCurrentPage]=useState(1)
    const [productPerPage,setProductPerPage]=useState(8)
    
    const indexOfLastProduct=currentPage*productPerPage
    const indexOfFirstProduct=indexOfLastProduct-productPerPage
const change=(num)=>{
    setCurrentPage(num)
}

const state=useSelector(state=>state.getReducer)


let electro= state.filter(el=>(el.category== "électroménager"))
const totalProduct =electro.length
let elect=electro.slice(indexOfFirstProduct,indexOfLastProduct)

    return (
        <div>
             
        <ul className=' product ' >
            {elect.map((el)=><OneProduct state={el}/>)}
           
        </ul>
        <Pagination totalProduct={totalProduct} productPerPage={productPerPage} change={change}/>
        </div>
    )
}

export default Electromenager