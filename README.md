# Book Vibe

Book Vibe is a client-side reading tracker built with React and Vite. Users can browse a seeded catalog, open detailed book pages, save books to a read list or wish list, remove saved books, sort saved entries, and view a custom Recharts-based pages chart.

## Current App Behavior

- Shows a home hero section and a reusable book grid
- Loads a seeded catalog from `public/booksData.json`
- Caches catalog data in `localStorage`
- Opens a dedicated details page for each book
- Adds books to a read list
- Adds books to a wish list unless the book is already in the read list
- Prevents duplicate entries with toast messages
- Removes books from both read list and wish list from the listed-books cards
- Sorts both saved tabs by page count or rating
- Includes a demo sign-in screen with hardcoded credentials
- Includes a sign-up UI screen
- Displays a custom shaped bar chart on the pages-to-read route

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- daisyUI 5
- React Toastify
- React Tabs
- Recharts
- React Icons
- ESLint

## 🚀 Live Demo
Live-site: https://book-vibe-siam11.netlify.app

Repository: https://github.com/Khalid-Sifullah-Siam/Book-vibe-siam11
## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with hero banner and the book grid |
| `/books` | Full catalog view |
| `/books/:id` | Book details page with read and wishlist actions |
| `/listedbooks` | Tabbed saved-books screen for read list and wish list |
| `/pages-to-read` | Recharts page summary using featured books from the dataset |
| `/signin` | Demo sign-in form |
| `/signup` | Sign-up UI form |

## Data Flow

### Catalog

- The app seeds book data from `public/booksData.json`
- `getBooksData()` caches the catalog under `book-vibe-books`
- The current dataset contains 9 books

### Saved Lists

- Read list data is stored under `book-vibe-read-list`
- Wish list data is stored under `book-vibe-wish-list`
- Shared list actions live in `src/Context/Context.jsx`
- Remove actions are available for both saved lists

### Sorting

- Sorting state is shared through `src/Context/SortingContext.jsx`
- Available sort keys:
  - `pages-asc`
  - `pages-desc`
  - `rating-asc`
  - `rating-desc`

## UI Notes

- The navbar includes a mobile menu toggle
- The footer includes quick links and a CTA back to saved books
- Toast notifications are mounted globally in `src/main.jsx`
- The pages-to-read chart currently uses a fixed featured set of book IDs: `1, 2, 3, 8, 5`
- The sign-up page is currently presentation-only and does not submit data
- The sign-in page validates against static demo credentials and redirects to `/` on success

## Demo Credentials

- Email: `reader@bookvibe.com`
- Password: `123456`

## Project Structure

```text
Book-Vibe/
|-- public/
|   |-- booksData.json
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- assets/
|   |-- Components/
|   |   |-- AllTimeShow/
|   |   |   |-- Footer/
|   |   |   |-- MainLayout/
|   |   |   `-- Navbar/
|   |   |-- DynamicShow/
|   |   |   |-- BookDetails/
|   |   |   |-- Books/
|   |   |   |-- ErrorPage/
|   |   |   |-- HomePage/
|   |   |   |-- ListedBooks/
|   |   |   |-- PagesToRead/
|   |   |   |-- ReadList/
|   |   |   |-- SignIn/
|   |   |   |-- SignUIp/
|   |   |   `-- WishList/
|   |   `-- Utils/
|   |       |-- Reachart/
|   |       |-- bookSorting.js
|   |       `-- localDB.js
|   |-- Context/
|   |   |-- Context.jsx
|   |   `-- SortingContext.jsx
|   |-- Routes/
|   |   `-- Routes.jsx
|   |-- index.css
|   `-- main.jsx
|-- eslint.config.js
|-- index.html
|-- package.json
|-- vite.config.js
`-- README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Production Bundle

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Lint

```bash
npm run lint
```

## Important Files

- `src/Routes/Routes.jsx`: router setup
- `src/Context/Context.jsx`: read list and wish list state/actions
- `src/Context/SortingContext.jsx`: shared sorting state
- `src/Components/Utils/localDB.js`: localStorage helpers and catalog cache
- `src/Components/DynamicShow/ListedBooks/ListedBooks.jsx`: tabs and sorting dropdown
- `src/Components/DynamicShow/ReadList/ReadList.jsx`: read list cards and remove action
- `src/Components/DynamicShow/WishList/WishList.jsx`: wish list cards and remove action
- `src/Components/DynamicShow/PagesToRead/PagesToRead.jsx`: featured chart data mapping

## Known Limitations

- No backend or real authentication
- Sign-up form has no submit logic
- Pages-to-read does not visualize the user's saved books; it uses fixed featured books from the seed data
- There are no automated tests in the project yet

## License

This project does not currently include a license file.
