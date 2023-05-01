import React from 'react'
import right from '../assets/images/right.svg'

const Massage = ({ massage, setSuccess}) => {

  return (
    <div>
        <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-gray-50 border-green-600 mt-2">
            <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full text-gray-50">
                <img src={right} alt='icon' className='w-8' />
            </span>
            <div className="flex-1 p-2">
                <p className="text-sm text-green-600 text-gray-800"> {massage} </p>
            </div>
            <button type="button" className="ml-6 p-2 text-gray-600" onClick={() => setSuccess(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Massage