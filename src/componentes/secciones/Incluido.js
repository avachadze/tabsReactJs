import React from 'react'

function Incluido() {
    return (
        <div className='text-start'>


            <div className="flex items-center border border-gray-200 rounded ps-4 dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="bordered-radio-1" className="w-full py-4 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Grupo</label>
            </div>
            <div className="flex items-center border border-gray-200 rounded ps-4 dark:border-gray-700">
                <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> 
                    <label htmlFor="bordered-radio-2" className="w-full py-4 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Privado</label>
            </div>



        </div>
    )
}

export default Incluido