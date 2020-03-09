import React from 'react'


class CourseListHeader extends React.Component {
		
	render(){

		return (
      <tr>
        <th title="Marca de destacado">
          {/* <i style={{fontSize: 20, color: "red"}} className="fa fa-heart"></i> */}
        </th>
        <th>Detalles</th>
        <th>Categoría</th>
        <th>Precio</th>
        <th>Estado del curso</th>
        <th>Duración</th>
        <th>Acciones</th>
      </tr>
    );
	}

}

export default CourseListHeader;