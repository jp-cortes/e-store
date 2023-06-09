'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductValues, createProductValuesSchema } from "../../utils/schemas/Products";
import { ErrorText } from "../ErrorText";
import { createProduct } from "../../services/queries/products";
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import * as Dialog from '@radix-ui/react-dialog';


export function FormCreateProduct() {
    
    const { 
      register,
      handleSubmit,
      formState: { errors, isSubmitting } } = useForm<CreateProductValues>({
     resolver: zodResolver(createProductValuesSchema)
    })
  
    
    async function handleUpdate(newProduct: CreateProductValues){
      
            const file: File | string = newProduct.image[0];
                try {   
                  const data = new FormData();
                  data.append("file", file);
                  data.append("upload_preset", "e_store");
                  if(data !== null) {
                    // if data is not an empty object
                    // mean if there is a new image will be updated
                    const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                      method: 'POST',
                      body: data
                    });
                    
                    const dataFromCloud = await response.json();
             
                  const { url }: { url: string} = dataFromCloud;
                  newProduct.image  =`${url}`;
            
                  
                } 
               await createProduct(newProduct)
            
                await new Promise((resolve) => setTimeout(resolve,5000));
            
                location.reload();//reload the page if the product is updated
                console.log('done');
              } catch (error) {
                console.log(error);
              }
            
    }
        
  
    return (
      <Dialog.Root>
        <Dialog.Overlay className="bg-background/80 data-[state=open] fixed top-0 inset-0 grid grid-cols-1 place-content-center z-10" />
        <Dialog.Content className="data-[state=open] w-full  translate-y-[10%] translate-x-[5%] rounded-[6px] md:col-start-1 md:col-end-2 z-10">
          <div className="bg-white  rounded-xl p-2">
            <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
              <div className="overflow-hidden">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        {...register("name")}
                        required
                        type="text"
                        name="name"
                        id="title"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <ErrorText>{errors.name?.message}</ErrorText>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        {...register("price")}
                        min={1}
                        required
                        type="number"
                        name="price"
                        id="price"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <ErrorText>{errors.price?.message}</ErrorText>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="categoryId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Category
                      </label>
                      <select
                        {...register("categoryId")}
                        required
                        name="categoryId"
                        autoComplete="categoryId"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <ErrorText>{errors.categoryId?.message}</ErrorText>

                        {/* <option value="">--select--</option> */}
                        <option value="1">Automotive</option>
                        <option value="2">Sports</option>
                        <option value="3">Health</option>
                        <option value="4">Computers</option>
                        <option value="5">Games</option>
                        <option value="6">Furniture</option>
                        <option value="7">Industrial</option>
                        <option value="8">Home</option>
                        <option value="9">Beauty</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <textarea
                        {...register("description")}
                        required
                        name="description"
                        id="description"
                        autoComplete="description"
                        rows={3}
                        className="form-textarea mt-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <ErrorText>{errors.description?.message}</ErrorText>
                    </div>
                    <div className="col-span-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Product Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="image"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  {...register("image")}
                                  required
                                  id="image"
                                  name="image"
                                  type="file"
                                  className="sr-only"
                                />
                                {/* <ErrorText>{errors.image?.message}</ErrorText> */}
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 5MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Dialog.Close asChild>
                    <button
                      disabled={isSubmitting}
                      className="inline-flex justify-center py-2 px-4 mr-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 disabled:opacity-70"
                    >
                      Cancel
                    </button>
                  </Dialog.Close>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
                  >
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Dialog.Content>

        <Dialog.Trigger asChild>
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <CheckCircleIcon
                  className="-ml-1 mr-2 h-5 w-5"
                  aria-hidden="true"
                />
                Add Product
              </button>
            </span>
          </div>
        </Dialog.Trigger>
      </Dialog.Root>
    );
  }