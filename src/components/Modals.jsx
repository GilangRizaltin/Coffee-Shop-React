import React from 'react'

export function ModalsTwoButton(props) {
  return (
    <div
      className={`flex fixed inset-0 items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      id="myModals"
    >
      <div
        className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center"
      >
        <p className="text-red-700">{}</p>
        <div className="flex justify-end items-center h-12 gap-4 text-black">
        <button
            className="flex-1 h-full hover:bg-order text-base border-2 border-solid border-gray-400 rounded-lg"
            id="cancel"
            >
            Cancel
          </button>
          <button
            className="flex-1 h-full bg-orange-300 hover:bg-primary text-base border-2 border-solid border-orange-300 rounded-lg"
            id="submit"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

