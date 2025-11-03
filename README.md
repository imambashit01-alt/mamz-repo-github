# MAMZ E-commerce Website

A modern, responsive e-commerce website built with React, Vite, and Tailwind CSS featuring Google OAuth authentication.

## Features

- **Google OAuth Authentication**: Secure login using Google accounts
- **Responsive Design**: Mobile-first design with dark/light theme support
- **Modern UI**: Built with Framer Motion animations and Tailwind CSS
- **Product Categories**: New, Women, Men, Kids, Sale sections
- **Shopping Cart**: Add/remove items with persistent storage
- **User Profiles**: View and manage user information
- **Footer Links**: Support, shipping, returns, privacy policy, etc.

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: Google OAuth (@react-oauth/google)
- **Routing**: React Router DOM
- **State Management**: React Context API

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials
5. Add `http://localhost:5173` to authorized redirect URIs
6. Copy the Client ID and replace it in `src/main.jsx`

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mamz-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Google OAuth:
   - Follow the Google OAuth Setup section above
   - Update the client ID in `src/main.jsx`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with user auth
│   ├── Footer.jsx      # Site footer
│   ├── LoginModal.jsx  # Google OAuth login modal
│   ├── CartModal.jsx   # Shopping cart modal
│   └── Hero.jsx        # Hero section
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication context
├── pages/             # Route components
│   ├── Home.jsx       # Landing page
│   ├── New.jsx        # New arrivals
│   ├── Women.jsx      # Women's clothing
│   ├── Men.jsx        # Men's clothing
│   ├── Kids.jsx       # Kids' clothing
│   ├── Sale.jsx       # Sale items
│   ├── About.jsx      # About page
│   ├── Contact.jsx    # Contact page
│   └── ...            # Other pages
├── utils/             # Utility functions
│   └── auth.js        # Authentication helpers
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Authentication

The app uses Google OAuth for authentication. User data is stored in localStorage for persistence across sessions. The authentication flow includes:

- Google OAuth popup for login
- JWT token decoding for user information
- Context-based state management
- Automatic logout and storage cleanup

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
