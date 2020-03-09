import React from 'react'
import {Link} from 'react-router-dom'
import ModalDelete from '../utils/DeleteModal'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./style.css";

class CourseNew extends React.Component {

	render(){

		const {
      isFetching,
      providers, 
      categories,
      modalities,
      course,
      onHandleNewInputChange,
      onSaveCourseClick,
      onCancelSaveCourseClick
    } = this.props;

		return (
      <div className="card mb-0">
        {isFetching && (
          <div className="loader-style">
            <div className="text-loader">
              <label>Publicando curso</label>
            </div>
            <Loader
              className="img-loader"
              type="CradleLoader"
              color="#6c8e52"
              height={100}
              width={100}
              timeout={0} //3 secs
            />
          </div>
        )}
        <div className="card-header">
          <h3 className="card-title">Publicar un nuevo curso</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label className="form-label text-dark">Titulo (*)</label>
            <input
              type="text"
              className="form-control"
              name="name"
              defaultValue={course.name}
              placeholder="Ingrese un título"
              onChange={onHandleNewInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label text-dark">Categoría (*)</label>
            <select
              name="category_id"
              className="form-control custom-select"
              defaultValue={course.category_id}
              onChange={onHandleNewInputChange}
            >
              <option value="-1">Seleccione una categoría</option>
              {categories && categories.length > 0
                ? categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label text-dark">Modalidad (*)</label>
            <select
              name="modality_id"
              className="form-control custom-select"
              defaultValue={course.modality_id}
              onChange={onHandleNewInputChange}
            >
              <option value="-1">Seleccione una modalidad</option>
              {modalities && modalities.length > 0
                ? modalities.map(modality => (
                    <option key={modality.id} value={modality.id}>
                      {modality.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label text-dark">
              Duración en horas (*)
            </label>
            <input
              type="number"
              className="form-control"
              name="duration"
              defaultValue={course.duration}
              placeholder="Duración en horas del curso"
              onChange={onHandleNewInputChange}
              min={0}
            />
          </div>
          <div className="form-group">
            <label className="form-label text-dark">Profesor (*)</label>
            <select
              name="provider_id"
              className="form-control custom-select"
              defaultValue={course.provider_id}
              onChange={onHandleNewInputChange}
            >
              <option value="-1">Seleccione una profesor</option>
              {providers && providers.length > 0
                ? providers.map(provider => (
                    <option key={provider.id} value={provider.id}>
                      {
                        (provider &&
                        provider.user_profile &&
                        provider.user_profile.name)? provider.user_profile.name : provider.email}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label text-dark">Opciones de precio</label>
            
            <label style={{padding: 5}} className="form-control"> 
              <input
                style={{marginLeft: 5}}
                type="radio"
                name="priceWay"
                checked={(course.priceWay === "isFree")}
                defaultValue="isFree"
                onChange={onHandleNewInputChange}
              /> Gratis 
              <input
                style={{marginLeft: 5}}
                type="radio"
                name="priceWay"
                checked={(course.priceWay === "is_in_offer")}
                defaultValue="is_in_offer"
                onChange={onHandleNewInputChange}
              /> En oferta 
              <input
                style={{marginLeft: 5}}
                type="radio"
                name="priceWay"
                defaultValue="isPaid"
                checked={(course.priceWay === "isPaid")}
                onChange={onHandleNewInputChange}
              /> Pago
            </label>
          </div>
          {
            (course.priceWay === "isPaid")?
              <div className="form-group">
                <label className="form-label text-dark">Precio $ (*)</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  defaultValue={course.price}
                  placeholder="React Native"
                  onChange={onHandleNewInputChange}
                />
              </div>
            :
            (course.priceWay === "is_in_offer")&&
              <div className="form-group">
                <label className="form-label text-dark">Precio base $ (*)</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  defaultValue={course.price}
                  placeholder="Precio base"
                  onChange={onHandleNewInputChange}
                />
                <br/>
                <label className="form-label text-dark">Precio de oferta $ (*)</label>
                <input
                  type="number"
                  className="form-control"
                  name="offer_price"
                  defaultValue={course.offer_price}
                  placeholder="Precio de oferta"
                  onChange={onHandleNewInputChange}
                />
              </div>
          }
          <div className="form-group">
            <label className="form-label text-dark">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="6"
              placeholder="Ingrese una breve descripción del curso"
              defaultValue={course.description}
              onChange={onHandleNewInputChange}
            ></textarea>
          </div>
          <div className="p-2 border mb-4 form-group">
            <label>Puede subir la descripción del curso en formato PDF (Tamaño máximo de 10 MB)</label>
            <form>
              <input
                id="demo"
                type="file"
                name="document_description"
                accept=".pdf"
                onChange={onHandleNewInputChange}
              />
            </form>
          </div>
          {course &&
          course.document_description &&
          course.document_description.error ? (
            <div style={{ marginTop: -14 }}>
              <p style={{ color: "red" }}>
                <i
                  className="fa fa-exclamation-triangle"
                  style={{ paddingRight: 10 }}
                ></i>
                {course.document_description.error}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="p-2 border mb-4 form-group">
            <label>Imagen (Tamaño máximo de 2 MB) (*) </label>
            <form>
              <input
                id="demo"
                type="file"
                name="image"
                accept=".jpg, .png, image/jpeg, image/png"
                onChange={onHandleNewInputChange}
              />
            </form>
          </div>
          {course &&
          course.image &&
          course.image.error ? (
            <div style={{ marginTop: -14 }}>
              <p style={{ color: "red" }}>
                <i
                  className="fa fa-exclamation-triangle"
                  style={{ paddingRight: 10 }}
                ></i>
                {course.image.error}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label className="form-label">Ingrese la URL del curso (*)</label>
            <input
              type="text"
              name="link_media"
              className="form-control"
              placeholder="https://video.com"
              defaultValue={course.link_media}
              onChange={onHandleNewInputChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label text-dark">Opciones de fechas</label>
            
            <label style={{padding: 5}} className="form-control"> 
              <input
                style={{marginLeft: 5}}
                type="radio"
                name="dateWay"
                checked={(course.dateWay === "with_date")}
                defaultValue="with_date"
                onChange={onHandleNewInputChange}
              /> Temporal 
              <input
                style={{marginLeft: 5}}
                type="radio"
                name="dateWay"
                checked={(course.dateWay === "without_date")}
                defaultValue="without_date"
                onChange={onHandleNewInputChange}
              /> Atemporal
            </label>
          </div>
          {
            (course.dateWay === "with_date")&&
              <div className="form-group">
                <label className="form-label">Fecha de inicio (*)</label>
                <input
                  type="date"
                  className="form-control"
                  name="begin_date"
                  defaultValue={course.begin_date}
                  onChange={onHandleNewInputChange}
                />
              </div>
          }
          {
           (course.dateWay === "with_date")&&
            <div className="form-group">
              <label className="form-label">Fecha de culminación (*)</label>
              <input
                type="date"
                className="form-control"
                name="end_date"
                defaultValue={course.end_date}
                onChange={onHandleNewInputChange}
              />
            </div>
          }
          <div className="form-group">
            <label className="form-label text-dark">Nivel de importacia</label>
            
            <label style={{padding: 5}} className="form-control"> 
              <input
                style={{marginLeft: 5}}
                type="radio"
                name="is_important"
                checked={course.is_important === "1"}
                defaultValue="1"
                onChange={onHandleNewInputChange}
              /> Destacado 
              <input
                style={{marginLeft: 5}}
                type="radio"
                name="is_important"
                checked={course.is_important === "2"}
                defaultValue="2"
                onChange={onHandleNewInputChange}
              /> Común 
            </label>
          </div>
        </div>
        <div className="card-footer ">
          <div style={{ float: "left" }}>
            <button
              className="btn btn-success"
              onClick={() => onSaveCourseClick(course)}
            >
              Guardar
            </button>
          </div>
          <div style={{ float: "right" }}>
            <button
              className="btn btn-info"
              onClick={() => onCancelSaveCourseClick()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );

	}

}

export default CourseNew;