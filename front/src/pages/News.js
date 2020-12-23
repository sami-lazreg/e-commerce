export default function News(){
    return(
        <>
 <div className='container  mt-5'>
<h1>Actualités</h1>
<div className='news mt-5'>
<div className='newcard thumbnail'>
  <div className="positionner m-2">
  <img src='https://images.frandroid.com/wp-content/uploads/2020/03/huawei-p40-frandroid-2020.png' height='200'/>
  <p style={{margin:'15px'}}>Sumsung Galaxy S20</p>
  <button className='btn btn-product-list add-to-cart'>Ajouter au panier</button>
  </div>
</div>
<div className='newcard thumbnail'>
<div className="positionner m-2">
  <img src='https://imtc.qccdn.fr/test/smartphone/zoom/apple-iphone-se-2020_001.jpg' height='200'/>
  <p style={{margin:'15px'}}>Apple iphone 11 Pro</p>
  <button className='btn btn-product-list add-to-cart'>Ajouter au panier</button>
  </div>
</div>
<div className='newcard thumbnail'>
<div className="positionner m-2">
  <img src='https://images.frandroid.com/wp-content/uploads/2020/01/samsung-galaxy-s20-frandroid-2020-5g.png' height='200'/>
  <p style={{margin:'15px'}}>Huawei P30 Pro</p>
  <button className='btn btn-product-list add-to-cart'>Ajouter au panier</button>
  </div>
</div>
</div>
</div>
</>
    )
}
