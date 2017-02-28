import React from 'react';
import {render} from 'react-dom';
import {get} from 'axios';

get('/backend-tree/routes')
    .then(res => res.data)
    .then(routePaths => {
        render(
          <div>
              {routePaths.map(path => <h1>{path}</h1>)}
          </div>,
          document.getElementById('app')
        );
    });