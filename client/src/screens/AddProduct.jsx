import React, { useState } from 'react'
import { useAddProductMutation } from '../reduxToolKit/services/userAPI'

const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(12000)
    const [description, setDescription] = useState('')
    const [photos, setPhotos] = useState([])
    const [stock, setStock] = useState()
    const [catagory, setCatagory] = useState("")

    const [addProduct, result] = useAddProductMutation()

    const handleUpload = () => {

        // let images = [];
        // for (let i = 0; i < images.length; i++) {
        //     images.push(photos)
        // }

        const formData = new FormData(); 

        formData.append("name", productName)
        formData.append("price", price)
        formData.append("description", description)
        for (let i = 0; i < photos.length; i++) {            
            formData.append("photos", photos[i])
        }
        formData.append("stock", stock)
        formData.append("catagory", catagory)



        addProduct(formData)
        console.log('result : ', result);
        console.log(productName);
        console.log(price);
        console.log(description);
        console.log(photos[0], "Photos is hare");
        console.log(stock);
        console.log(catagory);

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
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Description</label>
                            <textarea type="text" name="text" id="email" className="w-full px-3 py-2 border resize-y rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                            />
                        </div>
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
                                <label htmlFor="text" className="block mb-2 text-sm">Catagory</label>
                                <input type="text" name="text" id="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                    onChange={e => setCatagory(e.target.value)}
                                    value={catagory}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50" onClick={handleUpload}>Add new product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct