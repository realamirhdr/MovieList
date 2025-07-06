
````markdown
# 🎥 MovieList Frontend

A React.js-based frontend for managing a personal movie database. Built with Redux, React Router, SCSS, and Axios.

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Available Scripts](#available-scripts)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)

---

## About

This frontend application lets you create, view, edit, and delete movies in your personal database. It includes user authentication, favorites functionality, responsive design, and uses the OMDB API for movie data.

Live demo and login info are included in the original project’s README :contentReference[oaicite:1]{index=1}.

---

## Features

- ✅ **User authentication** (sign up/log in)  
- 🎞️ Create, read, update, delete (CRUD) movies  
- 💖 Mark/unmark favorites  
- 🛠️ Edit or delete movie entries  
- 🌐 Responsive design (desktop & mobile) :contentReference[oaicite:2]{index=2}

---

## Tech Stack

- React.js (with Hooks)  
- Redux for state management  
- React Router for navigation  
- SCSS for styling  
- Axios for API requests  
- OMDB API for movie data :contentReference[oaicite:3]{index=3}

---

## Getting Started

### Prerequisites

- Node.js installed  
- OMDB API key (get yours at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx))

### Installation

```bash
git clone https://github.com/realamirhdr/MovieList.git
cd MovieList
cd frontend

npm install
````

---

### Environment Variables

Create a `.env` file in `frontend/` with:

```env
REACT_APP_API_URL=http://127.0.0.1:5050/api/v1
REACT_APP_OMDB_API_KEY=your_omdb_api_key_here
```

Or, if you're using the live backend:

```env
REACT_APP_API_URL=https://movie-sringtho-8352b0c3e296.herokuapp.com/api/v1
REACT_APP_OMDB_API_KEY=your_omdb_api_key_here
```

Replace `your_omdb_api_key_here` with your real key ([github.com][1]).

---

### Run Locally

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000).
(Note: this default port is standard for Create‑React‑App.)&#x20;

---

## Available Scripts

Run in `frontend/` directory:

```bash
npm start        # Start dev server
npm run build    # Build production files
npm test         # Run tests (if configured)
npm run lint     # Lint code (if ESLint is set up)
```

---

## Project Structure

```
frontend/
├── public/                 # index.html & static files  
├── src/
│   ├── components/         # Shared UI components  
│   ├── pages/              # Route pages  
│   ├── redux/              # Redux slices & store  
│   ├── utils/              # API helpers, etc.  
│   ├── App.jsx             # Main app & routes  
│   └── index.js            # Entry point  
├── .env                    # Env variables  
├── package.json  
├── README.md  
└── .gitignore
```

---

## Contributing

Feel free to submit pull requests or suggest improvements. For major changes, open an issue to discuss first.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

This project’s structure and functionality were inspired by the original MovieReel frontend repo ([github.com][1]).

---

**Enjoy building with MovieList!**

[1]: https://github.com/ringtho/movielist-frontend?utm_source=chatgpt.com "ringtho/movielist-frontend: MovieReel Database Frontend Application"
