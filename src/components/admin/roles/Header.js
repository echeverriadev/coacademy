import React, { Component } from 'react';

class HeadTable extends Component {
    render() {
        return (
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
        );
    }
}


export default HeadTable;