import React, { use } from 'react';
import { BookContext } from '../../../Context/Context';
import { Link } from 'react-router';


const ReadList = () => {

    const {storedBooks} = use(BookContext);
    return (
        <div>
            {storedBooks.length === 0 ? 
            <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
              <h2 className='font-bold text-3xl'>No read list data found</h2>
            </div>
            :
                storedBooks.map(storedBook => 
                      <div className="flex gap-6 bg-base-100 border border-gray-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                              <figure className="p-6 bg-[#F3F3F3] rounded-2xl m-6">
                                <img
                                  src={storedBook.image}
                                  alt={storedBook.bookName}
                                  className="rounded-2xl w-24 "
                                />
                              </figure>

                              <div>


                                <h2 className="card-title font-bold text-2xl mb-2">
                                  {storedBook.bookName}
                                </h2>

                                  <p className="font-medium">
                                  By : {storedBook.author}
                                </p>
                
                                  <div  className="flex justify-around items-center gap-2">
                                  <p className='font-bold'>Tag</p>
                              <div className="mt-6 grid min-h-14 grid-cols-2 gap-2 items-start">
                                {storedBook.tags.map((tag, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-around"
                                  >
                                   <p className='badge bg-[#e9e9e9] text-[#23BE0A] font-bold px-4 py-2 whitespace-nowrap'>{tag}</p> 
                                  </div>
                                ))}

                                </div>
                                <p className='mb-3'>Year Of Publishing: {storedBook.yearOfPublishing}</p>
                              </div>

                               
                               <div className='flex gap-4'>
                              <p className='text-gray-500 font-light'>Publisher: {storedBook.publisher}</p>
                              <p className='text-gray-500 font-light'>page: {storedBook.totalPages}</p>
                               </div>
                
                              <div className="card-body pt-4">
                                
                              
                                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
                                  <p className="text-blue-600 bg-blue-100 p-1 text-center rounded-full">
                                    {storedBook.category}
                                  </p>
                                  <p className="text-orange-400 bg-orange-50 text-center p-1 rounded-full">
                                  Rating:  {storedBook.rating}
                                  </p>
                                  <Link className='btn bg-green-500 text-white rounded-full' to={`/books/${storedBook.bookId}`} key={storedBook.bookId}>View Details</Link>
                                </div>
                              </div>
                            </div>
                            </div>
                )
            }
        </div>
    );
};

export default ReadList;