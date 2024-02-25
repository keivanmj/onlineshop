import React, {useState, useEffect} from "react";
import omoomi from './omoomi.jpg'; // Import the image

function TestComponent(props) {

    const [imageList, setImageList] = useState([])

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageList(prevImages => [...prevImages, file])
        }
    };

    function handleClick(e) {
        e.preventDefault();
        props.onSavePics(imageList)
        setImageList()
    }

    return (
        <div>
        <h1>Image Input</h1>
        <input type="file" accept="image/*" onChange={handleImageChange}/>
            {imageList.length > 0 && (
                <div>
                <h2>Selected Images Preview</h2>
                {imageList.map((image, index) => (
                    <img key={index} src={URL.createObjectURL(image)} alt={`Selected Image ${index}`} style={{ maxWidth: '100px', marginRight: '5px' }} />
                ))}
                <button onClick={handleClick}>Save</button>
                </div>
            )}
        </div>
    );
}
export default TestComponent;