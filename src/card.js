import React from 'react';
import './App.css';

function Card(){
    const cardData = [{ itemName: "Biryani", itemUrl: "https://biryanistation.in/img/Web_gallery_Imgs1.jpg" },
    { itemName: "Burger", itemUrl: "https://cdn.dotpe.in/longtail/item_thumbnails/7859832/OBTDVWHz.webp" }, 
    { itemName: "Pani Puri", itemUrl: "https://www.idcleveland.com/wp-content/uploads/2020/05/pani-puri-2.jpg" }, 
    { itemName: "Gulab Gamun", itemUrl: "https://www.sendbestgift.com/media/images/product/4de8854438f17228aa492fb033721a6e.jpg" }, 
    { itemName: "Pizza", itemUrl: "https://img.shpy.in/167599/1681290353021_SKU-2557_0.webp?" } 
                    ]
    return(
        <>
            {cardData.map((item, i) => {
                return (
                    <div id={'card'+i}>
                        <img src={item.itemUrl} />
                        <p>{item.itemName}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Card;