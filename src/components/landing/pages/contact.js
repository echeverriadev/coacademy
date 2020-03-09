import React, { Component } from "react";
import Footer from '../partials/_footer';
import Menu from "../partials/_menu";

import GoogleMapReact from "google-map-react";

declare var $:any;

class contact extends Component {
  static defaultProps = {
    center: {
      lat: -33.421444,
      lng: -70.604877
    },
    zoom: 15
  };

  UNSAFE_componentWillMount() {
      var body = $('body');
      body.removeClass('sidebar-gone active');
      body.addClass('sidebar-gone')

      this.props.changeMenu('CONTACT');
  }

  render() {

    const {user, onLogout} = this.props;

    return (
      <div>
        <div className="sptb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xl-6  col-md-12">
                <div className="map1" style={{ height: "384px" }} >
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyAykAdIIsNMu0V2wyGOMQcguo8zKngWlyM"
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-12">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name1"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Correo electrónico"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="example-textarea-input"
                        rows="6"
                        placeholder="Mensaje"
                      ></textarea>
                    </div>
                    <div className="text-left">
                      <a href="/" className="btn btn-primary">
                        Enviar mensaje
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;