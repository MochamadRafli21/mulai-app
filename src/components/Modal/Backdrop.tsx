import { createPortal } from "react-dom"

export default function BackDrop({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) {
  return (
    createPortal(
      <div onClick={onClose}
        className={isVisible
          ? "fixed inset-0 z-50 bg-black opacity-50" : "fixed inset-0 z-50 bg-black opacity-0 hidden"}>
      </div>,
      document.body
    )
  )
}
