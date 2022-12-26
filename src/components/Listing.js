function Listing (props){
  let item = [];
  let levelGrade = "";
  let costWithCurrency ="";
  let titleItem = "";
  if (props.item) { item = props.item };

  let items = item.map(function(elem, index){
   titleItem = elem.title;
  if (titleItem) {titleItem = (titleItem.length > 50) ? (titleItem.slice(0, 50) + "...") : titleItem;}

   if (elem.currency_code === "USD"){
    costWithCurrency = "$"+ String(elem.price); 
   } 
   else if (elem.currency_code === "EUR"){
    costWithCurrency = "€" + String(elem.price);
   }
   else {
    costWithCurrency = String(elem.price) + " " + elem.currency_code;
   }


  if(elem.quantity <= 20 && elem.quantity > 10){
    levelGrade = "level-medium";
  }
  else if (elem.quantity <= 10){
    levelGrade = "level-low";
  }
  else {
    levelGrade = "level-high";
  }
  return <>      
    <div id = {elem.listing_id} className ="item" key={`product-${index}`}>
      <div className ="item-image">
        <a href={elem.url}>
          <img src={(elem.MainImage && elem.MainImage.url_570xN) ? elem.MainImage.url_570xN : 'no image'} alt ={elem.title}  />
        </a>
      </div>
      <div className ="item-details">
        <p className ="item-title">{titleItem}</p>
        <p className ="item-price">{costWithCurrency}</p>
        <p className ={`item-quantity ${levelGrade}`}>{elem.quantity} left</p>
      </div>
    </div>
  </>
    
  });

 
  return <div className ="item-list">
    {items} 
  </div>

}
export default Listing
