# fetch-subreddit-data
This project consists of a Node.js API and a React app that together simulate a simple Reddit-like interface. The app fetches r/FlutterDev posts from the Node.js server with three categories: Hot, New, and Rising. Bootstrap is used for styling.

## Getting Started

### Prerequisites

* Node.js (https://nodejs.org/)
* npm (Node.js package manager, comes with Node.js installation)

### Installation

1. Clone the repository:

   ```bash
   git clone <git@github.com:nada3zz/fetch-subreddit-data.git>
   cd fetch-subreddit-data
   ```

# Install API dependencies
* cd api
* npm install

# Install React app dependencies
* cd sub-reddit-posts
* npm install
  
# In the 'api' directory
* node app.js

# Project Structure
* **API (Node.js)**
   * api/app.js: Entry point for the Node.js server.
   * api/routes/redditRoutes.js: Express routes for handling Reddit-related requests.
   * api/controllers/redditController.js: Controllers for fetching and storing Reddit posts in Firebase.
   * api/config/firebaseConfig.js: Configuration file for Firebase.

* **API Endpoints**
   * /r/flutterDev/hot: Fetches hot posts.
   * /r/flutterDev/new: Fetches new posts.
   * /r/flutterDev/rising: Fetches rising posts.

* **React App**
   * sub-reddit-posts/src/components/redditPosts.js: React component for displaying Reddit posts.
   * sub-reddit-posts/src/components/navbar.js: React component for switching between posts categories.
   * sub-reddit-posts/src/App.js: Main React app component.
   * sub-reddit-posts/src/index.js: Entry point for the React app.