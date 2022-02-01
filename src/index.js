import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Project with React and Webpack</h1>
                    <div className="alert alert-danger" role="alert">
                        esto es bootstrap
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));