import React, { useContext } from "react"
import { ModalContext } from "../context/modalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

/**
 *
 * @param {Object} props
 */
const ModalClose = props => (
  <button
    title="Close modal"
    className="absolute top-0 right-0 z-10 text-xl p-4 m-2"
    {...props}
  >
    <FontAwesomeIcon icon={faTimes} className="" />
  </button>
)

/**
 *
 * @param {Object} props
 */
const ModalOverlay = props => (
  <div
    className="absolute top-0 left-0 bottom-0 right-0 bg-gray-200 bg-opacity-95"
    {...props}
  />
)

/**
 *
 * @param {Object} props
 * @param {String} props.id
 * @param {JSX.Element} props.children
 */
const Modal = ({ id, children }) => {
  const [state, setState] = useContext(ModalContext)

  const open = () => setState(state => ({ ...state, modal: id }))
  const close = () => setState(state => ({ ...state, modal: null }))

  if (state?.modal === id) {
    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 z-50">
        <ModalClose onClick={close} />
        <ModalOverlay onClick={close} />
        <div className="relative w-full h-full flex justify-center items-center z-0">
          <div className="flex-1">{children}</div>
        </div>
      </div>
    )
  }

  return <button onClick={open}>Open</button>
}

export default Modal
