import React, { use } from 'react';
import { BookContext } from '../../../Context/Context';
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { Sorting } from '../../../Context/SortingContext';

const WishList = () => {

    const {wishList} = use(BookContext);
    const filteredWishList = [...wishList];

    const {sortingType} = use(Sorting);

    if (sortingType === 'Pages-Low-To-High') {
      filteredWishList.sort((a, b) => a.totalPages - b.totalPages);
    }
    else if(sortingType === 'Pages-High-To-Low'){
      filteredWishList.sort((a, b) => b.totalPages - a.totalPages);
    }
     else if (sortingType === 'rating-Low-To-High') {
      filteredWishList.sort((a, b) => a.rating - b.rating);
    }
     else if (sortingType === 'rating-High-To-Low') {
      filteredWishList.sort((a, b) => b.rating - a.rating);
    }
    
    return (<div>
            {filteredWishList.length === 0 ? 
            <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
              <h2 className='font-bold text-3xl'>No wish list data found</h2>
            </div>
            :
                filteredWishList.map(wishBook => 
                      <div key={wishBook.bookId} className="flex gap-6 bg-base-100 border border-gray-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                              <figure className="p-6 bg-[#F3F3F3] rounded-2xl m-6">
                                <img
                                  src={wishBook.image}
                                  alt={wishBook.bookName}
                                  className="rounded-2xl w-24 "
                                />
                              </figure>

                              <div>


                                <h2 className="card-title font-bold text-2xl mb-2">
                                  {wishBook.bookName}
                                </h2>

                                  <p className="font-medium">
                                  By : {wishBook.author}
                                </p>
                
                                  <div  className="flex flex-wrap items-center gap-3">
                                  <p className='font-bold'>Tag</p>
                              <div className="mt-6 grid min-h-14 grid-cols-2 gap-2 items-start">
                                {wishBook.tags.map((tag, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-around"
                                  >
                                   <p className='badge bg-[#e9e9e9] text-[#23BE0A] font-bold px-4 py-2 whitespace-nowrap'>{tag}</p> 
                                  </div>
                                ))}

                                </div>
                                <p className='mb-3 flex items-center gap-2 text-gray-500 font-light'>
                                  <CiLocationOn className='text-lg' />
                                  <span>Year Of Publishing: {wishBook.yearOfPublishing}</span>
                                </p>
                              </div>

                               
                               <div className='flex flex-wrap gap-4'>
                              <p className='flex items-center gap-2 text-gray-500 font-light'>
                                <FaUserFriends className='text-base' />
                                <span>Publisher: {wishBook.publisher}</span>
                              </p>
                              <p className='flex items-center gap-2 text-gray-500 font-light'>
                                <MdOutlineContactPage className='text-lg' />
                                <span>Page: {wishBook.totalPages}</span>
                              </p>
                               </div>
                
                              <div className="card-body pt-4">
                                
                              
                                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
                                  <p className="text-blue-600 bg-blue-100 p-1 text-center rounded-full">
                                    {wishBook.category}
                                  </p>
                                  <p className="text-orange-400 bg-orange-50 text-center p-1 rounded-full">
                                  Rating:  {wishBook.rating}
                                  </p>
                                  <Link className='btn bg-green-500 text-white rounded-full' to={`/books/${wishBook.bookId}`} key={wishBook.bookId}>View Details</Link>
                                </div>
                              </div>
                            </div>
                            </div>
                )
            }
        </div>
    );
};

export default WishList;
