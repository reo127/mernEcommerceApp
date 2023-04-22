import React, { useRef, useState } from 'react'
import { useAddProductMutation } from '../reduxToolKit/services/userAPI'
import JoditEditor from 'jodit-react';

const AddProduct = () => {
    const editor = useRef(null)
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(12000)
    const [description, setDescription] = useState('')
    const [photos, setPhotos] = useState([])
    const [stock, setStock] = useState()
    const [catagory, setCatagory] = useState("electronic")

    const [addProduct, result] = useAddProductMutation()

    const handleUpload = () => {


        const formData = new FormData();         
        formData.append("name", productName)
        formData.append("price", price)
        formData.append("description", description)
        for (let i = 0; i < photos.length; i++) {            
            formData.append("photos", photos[i])
        }
        formData.append("stock", stock)
        formData.append("catagory", catagory)



        console.log('result : ', result);
        console.log(productName);
        console.log(price);
        console.log(description);
        console.log(photos[0], "Photos is hare");
        console.log(stock);
        console.log(catagory);
        addProduct(formData)

    }
    return (
        <div >
            <div className="flex flex-col max-w-md p-6 rounded-md  bg-gray-50 text-gray-800 mx-auto mt-4">
                <form action="" className="space-y-12 ng-untouched ng-pristine ng-valid" encType="multipart/form-data">
                    <div className="space-y-2">
                        <div className='flex'><div >
                            <label htmlFor="text" className="block mb-2 text-sm">Product Name</label>
                            <input type="text" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                onChange={e => setProductName(e.target.value)}
                                value={productName}
                            />
                        </div>
                            <div className='ml-2'>
                                <label htmlFor="text" className="block mb-2 text-sm">Price</label>
                                <input type="number" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                    onChange={e => setPrice(e.target.value)}
                                    value={price}
                                />
                            </div></div>

                            <JoditEditor 
                                ref={editor}
                                value={description}
                                onChange={dis => setDescription(dis)}
                            />

                        {/* <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Description</label>
                            <textarea type="text" name="text" id="email" className="w-full px-3 py-2 border resize-y rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                            />
                        </div> */}

                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Photos</label>
                            <div className="flex">
                                <input type="file" multiple accept='image/*' name="files" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                    onChange={e => setPhotos(e.target.files)}
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm">Stock</label>
                                <input type="number" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                    onChange={e => setStock(e.target.value)}
                                    value={stock}
                                />
                            </div>
                            <div className='ml-2'>
                            <div className="space-y-2">
                    <div className="flex">
                        <div>
                        </div>
                        
                        <div className='ml-2'>
                        <label>Caragory</label>
                            <select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                            value={catagory}
                            onChange={e => setCatagory(e.target.value)}
                            >
                                <option selected value="electronic">electronic</option>
                                <option value="book" >book</option>
                                <option value="toy">toy</option>
                                <option value="fashion">fashion</option>
                                <option value="clothes">clothes</option>
                            </select>
                        </div>
                    </div>

                </div>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50" onClick={handleUpload}>Add new product</button>
                        </div>
                    </div>
                </form>
                {description}
            </div>
        </div>
    )
}

export default AddProduct