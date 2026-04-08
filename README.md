# Book Vibe

Book Vibe is a responsive book discovery and reading-list web app built with React and Vite. It lets users browse a curated set of books, view detailed book information, add books to a read list or wish list, sort saved books, and visualize reading progress with a chart-based page summary.

## Overview

The project focuses on a clean client-side reading experience:

- Browse a catalog of books loaded from local JSON data
- Open a dedicated details page for each book
- Save books to a read list or a wish list
- Prevent duplicate entries with toast-based feedback
- Sort saved books by page count or rating
- View a pages-to-read chart using Recharts
- Keep reading data persisted in `localStorage`

## Features

- Responsive layout with reusable navbar, footer, and routed pages
- Book detail screen with publisher, year, tags, rating, and review
- Read list and wish list state shared through React Context
- Persistent client-side storage for catalog, read list, and wish list
- Sorting controls for:
  - Pages, low to high
  - Pages, high to low
  - Rating, low to high
  - Rating, high to low
- Toast notifications for success and duplicate-state validation
- Basic sign-in and sign-up UI screens
- Pages-to-read analytics view powered by `recharts`

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS 4
- daisyUI 5
- React Toastify
- React Tabs
- Recharts
- ESLint

## Project Structure

```text
Book-Vibe/
├─ public/
│  └─ booksData.json
├─ src/
│  ├─ Components/
│  │  ├─ AllTimeShow/
│  │  │  ├─ Footer/
│  │  │  ├─ MainLayout/
│  │  │  └─ Navbar/
│  │  ├─ DynamicShow/
│  │  │  ├─ BookDetails/
│  │  │  ├─ Books/
│  │  │  ├─ ErrorPage/
│  │  │  ├─ HomePage/
│  │  │  ├─ ListedBooks/
│  │  │  ├─ PagesToRead/
│  │  │  ├─ ReadList/
│  │  │  ├─ SignIn/
│  │  │  ├─ SignUIp/
│  │  │  └─ WishList/
│  │  └─ Utils/
│  │     ├─ Reachart/
│  │     ├─ bookSorting.js
│  │     └─ localDB.js
│  ├─ Context/
│  │  ├─ Context.jsx
│  │  └─ SortingContext.jsx
│  ├─ Routes/
│  │  └─ Routes.jsx
│  ├─ assets/
│  ├─ index.css
│  └─ main.jsx
├─ package.json
└─ README.md
```

## Routing

The app uses `createBrowserRouter` with the following routes:

| Route | Purpose |
| --- | --- |
| `/` | Home page with hero section and book grid |
| `/books` | Full book listing |
| `/books/:id` | Book details page |
| `/listedbooks` | Read list and wish list tabs |
| `/pages-to-read` | Reading progress chart |
| `/signin` | Demo sign-in page |
| `/signup` | Sign-up page |

## Data and State Management

### Book Catalog

- Initial book data is loaded from [`public/booksData.json`](./public/booksData.json)
- The catalog is cached in `localStorage` under `book-vibe-books`

### Reading Lists

- Read list is stored under `book-vibe-read-list`
- Wish list is stored under `book-vibe-wish-list`
- Shared state is managed through [`src/Context/Context.jsx`](./src/Context/Context.jsx)

### Sorting

- Sorting state is managed through [`src/Context/SortingContext.jsx`](./src/Context/SortingContext.jsx)
- Shared sort options and comparators live in [`src/Components/Utils/bookSorting.js`](./src/Components/Utils/bookSorting.js)

## Demo Credentials

The current sign-in screen uses a static demo login:

- Email: `reader@bookvibe.com`
- Password: `123456`

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL shown by Vite in your terminal.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Key Implementation Notes

- The app is fully client-side and does not require a backend
- Book actions are persisted automatically through `localStorage`
- Duplicate prevention is enforced before adding a book to a saved list
- The pages-to-read screen visualizes selected books by total page count

## Possible Improvements

- Add real authentication and protected routes
- Replace static sign-up form with validation and submission flow
- Add search and category filters for the book catalog
- Add unit and integration tests
- Introduce API-backed data instead of static JSON

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the built app locally |
| `npm run lint` | Run ESLint |

## License

This project is currently unlicensed for public reuse unless you add a license file.
