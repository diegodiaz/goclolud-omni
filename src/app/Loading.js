import React, {useEffect, useRef} from 'react';
import loading from './public/assets/img/robot-loader.gif';

export default (props) => {
  const isLoading = props.isLoading;
  const scpLoadingWrapper = useRef(null);
  useEffect(()=>{
    if (scpLoadingWrapper){
      if (isLoading){
        scpLoadingWrapper.current.style.display = 'flex';
        scpLoadingWrapper.current.style.opacity = 1;
      }else{
        scpLoadingWrapper.current.style.display = 'none';
        scpLoadingWrapper.current.style.opacity = 0;
      }
    }
  }, [scpLoadingWrapper]);
  return (
    <div className={`scp-loading-wrapper`} >
      <div ref={scpLoadingWrapper} className="scp-loading">
        <img src={loading} />
      </div>
    </div>
  );
}
