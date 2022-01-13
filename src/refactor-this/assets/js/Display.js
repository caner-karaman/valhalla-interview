import React from 'react';
import DisplayLoader from "./Display.Loader";
import { useAppContext } from "./App.context";
import useGetImage from "./useGetImage";


const Display = () => {
  const {category, page} = useAppContext();
  const {images, loading} = useGetImage(category, page);

  if(loading) return <div className='container'><DisplayLoader /></div>
  
  return (
    <div className="container">
      <div className="row row-cols-3">
        {images && images.map((image) => (
          <div key={image.name} className="col" style={{height: 400, padding: 10, marginBottom: 45}}>
            <img className="image" src={image.url} alt={image.name} style={{height: '100%', objectFit: 'cover', width: '100%'}} /> 
              <div className="middle">
                <a className="btn btn-dark" href={image.url} download={image.name}>DOWNLOAD</a>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Display;
