import React from 'react'

const EaditProductDetails = () => {
    return (
        <div >
            <div className="flex flex-col max-w-md p-6 rounded-md  bg-gray-50 text-gray-800 mx-auto mt-4">
                <form action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <div className='flex'><div >
                            <label htmlFor="text" className="block mb-2 text-sm">Product Name</label>
                            <input type="text" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                            <div className='ml-2'>
                                <label htmlFor="text" className="block mb-2 text-sm">Price</label>
                                <input type="number" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                            </div></div>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Description</label>
                            <textarea type="text" name="text" id="email" className="w-full px-3 py-2 border resize-y rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Photos</label>
                            <div className="flex">
                                <input type="text" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                                <button type="button" className=" px-2 py-2 font-semibold rounded-md bg-blue-600 text-gray-50 ml-2">Save</button>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm">Stock</label>
                                <input type="number" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                            </div>
                            <div className='ml-2'>
                                <label htmlFor="text" className="block mb-2 text-sm">Catagory</label>
                                <input type="text" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                            </div>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50">Add new product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EaditProductDetails