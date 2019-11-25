import React, {useEffect, useRef, useContext} from 'react';
import LoadingContext, {LoadingConsumer} from './contexts/LoadingContext';
import loadinggif from './public/assets/img/robot-loader.gif';

export default (props) => {
  const isLoading = props.isLoading;
  const scpLoadingWrapper = useRef(null);
  const loading = useContext(LoadingContext);
  useEffect(()=>{
    if (scpLoadingWrapper){
      if (loading.isLoading){
        scpLoadingWrapper.current.style.display = 'flex';
        scpLoadingWrapper.current.style.opacity = 1;
      }else{
        scpLoadingWrapper.current.style.display = 'none';
        scpLoadingWrapper.current.style.opacity = 0;
      }
    }
  }, [scpLoadingWrapper, loading]);
  return (
    <LoadingConsumer>
      {(isLoading) => (
        <div className={`scp-loading-wrapper`} style={{display: isLoading?'flex':'none'}} >
          <div ref={scpLoadingWrapper} className="scp-loading">
            <img src={loadinggif} />
          </div>
        </div>
      )}
    </LoadingConsumer>
  );
}
