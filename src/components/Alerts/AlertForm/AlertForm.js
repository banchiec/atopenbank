import { useEffect } from "react"
import PropTypes from 'prop-types'
import { ContainerAlert } from "./alertFormStyled"

const AlertForm = ( { text, handleCloseAlert} ) => {

  useEffect(() => {
    setTimeout(() => {
      handleCloseAlert()
    }, 3000);
    return clearTimeout()
  }, [])

  return(
    <ContainerAlert>
      <div className="toast active">
        <div className="toast-content">
          <i className="fas fa-solid fa-check check"></i>

          <div className="message">
            <span className="text text-1">{text}</span>
            {/* <span className="text text-2">Your changes has been saved</span> */}
          </div>
        </div>
        <i className="fa-solid fa-xmark close"></i>
        <div className="progress active"></div>
      </div>
    </ContainerAlert>
  )
}

AlertForm.propTypes = {
  text: PropTypes.string,
  handleCloseAlert: PropTypes.func
}

export default AlertForm