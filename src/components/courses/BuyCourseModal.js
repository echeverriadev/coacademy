import React from 'react'
import '../utils/styles.css'


class BuyCourseModal extends React.Component {

    render(){

        const { user, course, onSendBuyRequest, onHandleBuyRequestComment, onCancelBuyRequest } = this.props

        return(
            <div className="modal fade" id="BuyCourse" tabindex="-1" role="dialog"  aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{paddingBottom: 10}}>
                            <h3 className="modal-title"><i class="fe fe-credit-card mr-2 mr-2"></i> Solicitud de compra</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => onCancelBuyRequest()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="row" style={{marginBottom: -15}}>
                            <div class="col-md-12">
                                <div className="progress progress-md mb-4 h-4">
                                    <div className="progress-bar bg-info w-50">50%</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="padding-label">
                                    <p style={{fontSize: 14}}>
                                        Hola <strong>{(user && user.user_profile && user.user_profile.name)? user.user_profile.name : user.email }</strong>, has solicitado comprar 
                                        el curso <strong>{course.name}</strong>. Ya casi estamos.
                                    </p>
                                    <p style={{fontSize: 14, marginTop: -5}}>
                                        Esta solicitud de compra será recibida por nuestro equipo via correo electrónico, la evaluarán y te enviarán
                                        una respuesta lo más pronto posible con los pasos para finalizar la compra. Si tienes comentarios acerca del curso, puedes dejarlos adjuntos.
                                    </p>
                                </label>
                            </div>
                            <div className="form-group mb-0">
                                <textarea id="buy_comment" onChange={onHandleBuyRequestComment} className="form-control" name="buy_comment" rows="6" placeholder="Deja tu comentario" style={{resize: "none"}} defaultValue={course.buy_comment? course.buy_comment : "" } />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => onCancelBuyRequest()}>Cancelar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => onSendBuyRequest(user, course)}>Enviar solicitud</button>
                        </div>
                    </div>
                </div>
            </div>         
        );

    }

}

export default BuyCourseModal;