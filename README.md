# Film Full-Stack Application

A modern full-stack web application built with React, Vite, Tailwind CSS, and Node.js. This application allows users to manage a film collection with a beautiful, responsive UI.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger

## 📁 Project Structure

```
film/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles with Tailwind
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── postcss.config.js    # PostCSS configuration
├── backend/                  # Node.js + Express backend
│   ├── server.js            # Express server
│   └── package.json         # Backend dependencies
├── package.json             # Root package.json with scripts
└── README.md               # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone or navigate to the project directory**
   ```bash
   cd film
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Start both frontend and backend in development mode**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:4000
   - Backend: http://localhost:5000

### Manual Setup

If you prefer to set up frontend and backend separately:

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 🎯 Features

- **Film Management**: Add, view, and delete films
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, beautiful interface with Tailwind CSS
- **Real-time Updates**: Instant UI updates when data changes
- **Error Handling**: Proper error messages and loading states
- **API Integration**: Full CRUD operations with REST API

## 📡 API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/health` - Health check
- `GET /api/films` - Get all films
- `GET /api/films/:id` - Get film by ID
- `POST /api/films` - Create new film
- `PUT /api/films/:id` - Update film
- `DELETE /api/films/:id` - Delete film

## 🎨 UI Components

The application includes:
- **Header**: Title and description
- **Add Film Form**: Input fields for title, director, and year
- **Film List**: Display all films with delete functionality
- **Loading States**: Spinner and loading messages
- **Error Messages**: User-friendly error handling
- **Tech Stack Badges**: Visual indicators of technologies used

## 🔧 Development

### Available Scripts

**Root level:**
- `npm run dev` - Start both frontend and backend
- `npm run install:all` - Install all dependencies
- `npm run build` - Build frontend for production

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**
- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server

### Development Tips

1. **Frontend Development**: The Vite dev server includes hot module replacement for instant updates
2. **Backend Development**: Nodemon automatically restarts the server when files change
3. **API Proxy**: Frontend requests to `/api/*` are automatically proxied to the backend
4. **CORS**: Backend is configured to accept requests from the frontend

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
```
The built files will be in `frontend/dist/` and can be deployed to any static hosting service.

### Backend Deployment
```bash
cd backend
npm start
```
The backend can be deployed to services like Heroku, Railway, or any Node.js hosting platform.

## 🔒 Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin request handling
- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Proper error responses without exposing internals

## 📝 Future Enhancements

- Database integration (MongoDB, PostgreSQL)
- User authentication
- Film ratings and reviews
- Search and filtering
- Image uploads for film posters
- Pagination for large collections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy coding! 🎬✨** 