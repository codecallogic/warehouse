
const NewSlab = ({
  dispatch,
  changePopup
}) => {
  
  return (
    <div id="default-modal" tabIndex="-1" aria-hidden="true" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex bg-[rgba(0, 0, 0, 0.5)] justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            Hello
          </div>
      </div>
    </div>
  )
}

export default NewSlab
