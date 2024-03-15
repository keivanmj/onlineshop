import React, {useState, useEffect} from 'react';

function SeeAllItems(props) {

    useEffect(() => {

        const [categories, setCategories] = useState([]);

        const myList = JSON.stringify(productList);

        myList.forEach((item) =>{
            if (!categories.includes(item.getCategory())) { 
                setCategories(prevCategories => [...prevCategories, item.getCategory()])
            }
        })
    })

    return(
        <div>
            {categories.map((category) => {
                <div className="category">
                    <div>
                        {category}
                    </div>
                    <div class = "down-caret">
                        ^
                    </div>
                </div>
            })}
        </div>
    )
}

export default SeeAllItems;