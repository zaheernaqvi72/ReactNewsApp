# [News Portal Application](https://news-app-wheat-seven.vercel.app/)

Welcome to the News Portal Application! This web application allows users to browse and read news articles fetched from an external API. It provides features for filtering articles by category, marking favorites, and reading full articles.

## Features

- **Fetch News**: Fetches news articles from an external API.
- **Filter Articles**: Filter articles by categories such as business, health, science, technology, entertainment, sports, and favorites.
- **Mark Favorites**: Allows users to mark articles as favorites for quick access.
- **Responsive Design**: Built with responsive design principles using Material-UI components.
- **Persistent Storage**: Uses localStorage to persist favorite articles across sessions.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React UI framework for designing responsive and accessible applications.
- **React Router DOM**: Library for routing in React applications.
- **localStorage**: Browser API for persistent client-side storage.
- **External API**: Replace with the name of the external API used for fetching news articles.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zaheernaqvi72/ReactNewsApp.git
   ```
   ```bash
   cd ReactNewsApp
   ```
2. **Install dependencies:**

```bash
npm install
```

3. **Start the application:**

```bash
npm start
```

The application will be served at http://localhost:3000.

## Usage
- Upon loading, the application fetches and displays news articles.
- Use the category filter to view articles by specific categories.
- Click the heart icon on an article card to add it to favorites. Click again to remove it.
- Select the favorites category to view all articles marked as favorites.
- Click on any article card to navigate to the detailed view of the article.

## Credits
- This application was built by [Sayed Zaheer Abass](https://www.linkedin.com/in/sayed-zaheer-abass/).
- External API provided by [NewsAPI](https://newsapi.org/).
