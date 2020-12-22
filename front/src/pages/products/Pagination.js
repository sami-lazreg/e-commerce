import React from 'react'




const paginationBasic = ({totalProduct,productPerPage,change}) => {
    
let items = [];
for (let number = 1; number <= Math.ceil(totalProduct/productPerPage); number++) {
  items.push(number)
    
}

    return (
        <div >
            <nav aria-label="Page navigation example">
                 <ul class="pagination" style={{justifyContent:"center",margin:"50px 50px"}}>
                 {items.map(el=><li class="page-item" style={{border:"1px solid #9999ff"}}><a class="page-link" href={`#${el}`} onClick={()=>change(el)}>{el}</a></li>)}
                 </ul>
              </nav>
    </div>
    )
}

export default paginationBasic
