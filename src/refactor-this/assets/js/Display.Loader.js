import React from 'react';
import ContentLoader from "react-content-loader"

const DisplayLoader = (props) => {
  return (
    <ContentLoader 
    speed={2}
    width={975}
    height={500}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="5" rx="103" ry="3" width="120" height="380" /> 
    <rect x="135" y="5" rx="103" ry="3" width="120" height="380" /> 
    <rect x="270" y="5" rx="103" ry="3" width="120" height="380" /> 
  </ContentLoader>
  )
}

export default DisplayLoader;
