import React, { use } from 'react';
import { BookContext } from '../../../Context/Context';

const ListedBooks = () => {
    const {storedBooks} = use(BookContext);
    return (
        <div>
            {
                storedBooks.length
            }
        </div>
    );
};

export default ListedBooks;