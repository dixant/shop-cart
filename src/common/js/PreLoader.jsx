import React from 'react';
import ReactLoading from 'react-loading';
const PreLoader = () => {
    return (
        <div className="pre-loader-parent">
            <ReactLoading type={'bubbles'} color={'#282c34'} height={'50px'} width={'50px'} />
        </div>
    );
}

export default PreLoader;
