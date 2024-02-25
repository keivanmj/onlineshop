import React, {useState} from 'react';

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);

  const [items, setItems] = useState([])

  // const newFiles = []

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    // Handle the dropped files
    // const files = e.dataTransfer.files;
    const data = e.dataTransfer.getData('text');
    setItems([...items, data]);
    // Process the files...
  };

  const thereAreFiles = items.length === 0;

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ border: `2px dashed ${dragging ? 'green' : 'black'}`, height: '200px' }}
    >
      <p>Drag and drop your files here</p>
      {thereAreFiles ? (
        <p>The list is empty</p>
      ) : (
        <ul>
          {items.map((file, index) => (
            <li key={index}>
              {file && file.type && file.type.startsWith('image/') ? (
                <img class = "image" src={URL.createObjectURL(file)} alt={file.name} />
              ) : (
                <div>{file.name}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DragAndDrop;