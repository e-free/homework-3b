function Listing (props){
/*<img src={elem['MainImage'].url_570xN} alt=""/>*/
  let item = [];
  if (props.item) { item = props.item };
  console.log("item: ", item);
  console.log(item[0]['MainImage']['url_570xN']);
  let items = item.map(function(elem, index){
      return <>      
        <div id = {elem.listing_id} className ="item">
        <div className ="item-image">
          <a href={elem.url}>
            <img src={(elem.MainImage && elem.MainImage.url_570xN) ? elem.MainImage.url_570xN : 'no image'} alt ={elem.title}  />
          </a>
        </div>
        <div className ="item-details">
          <p className ="item-title">{elem.title}</p>
          <p className ="item-price">{elem.price}</p>
          <p className ="item-quantity level-medium">{elem.quantity} left</p>
        </div>
      </div>
    </>
    
  });

 
  return <div className ="item-list">
    {items} 
  </div>

}
export default Listing
