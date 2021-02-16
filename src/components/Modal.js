import {useDispatch} from "react-redux";
import {saveResultAction} from "../store/actions/wordActions";
import {store} from "../store/store";

const Modal = () => {
  const dispatch = useDispatch();
  const saveResult = () => {
    const spm = store.getState().words.spm
    const accuracy = store.getState().words.accuracy
    const name = document.querySelector('#nameUser').value

    dispatch(saveResultAction({name: name, spm: spm, accuracy: accuracy}))
  }

  return (
    <div className="modal fade" id="saveResultModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Сохранить результат?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            Введите своё имя:
            <input id="nameUser" type="text" className="form-control mt-3" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saveResult}>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
