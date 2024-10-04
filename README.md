# Venue Booking React Application

This project is a **React.js** application designed for venue booking with a focus on providing a pleasant and intuitive user interface. The app allows users to browse and reserve venues for various events, such as child parties, corporate events, birthdays, and bachelor/bachelorette nights.

## Features

- **Homepage Display**: Includes a slideshow featuring images of available venues and a list of event categories.
- **Navigation and Categories**: Users can select a category to view a list of venues under it. Each venue displays a photo, short description, and contact information. Users can click on venues to access a detailed page.
- **Venue Detail Page**: Displays detailed information, a gallery, and a "Rezervēt" (Reserve) button for bookings.
- **Reservation Process**: Users can pick available dates for booking through a calendar component.
- **Time-Based Search**: Search venues available for specific dates.
- **Responsive UI**: A visually appealing, responsive design that functions well on different screen sizes.

## How to Run the Project Locally

### Prerequisites

To run the project locally, make sure you have the following installed:

- **Node.js** (version 12 or later)
- **npm** or **yarn**

### Installation Steps

1. **Clone the Repository**  
   Open a terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/runcisduncis/venue-app
   cd venue-app
   ```

2. **Install Dependencies**  
   Install the required dependencies by running:
   ```bash
   npm install
   ```


3. **Run the Development Server**  
   Start the development server:
   ```bash
   npm start
   ```

4. **Access the Application**  
   Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

You should now be able to see and interact with the venue booking application.

### Folder Structure

## Here is an overview of the folder structure:

## Folder Structure

Here is an overview of the project's folder structure:

```plaintext
venue-booking-app/
├── public/
│   ├── img/                   # Folder containing images used for venue galleries and slideshow
│   └── index.html             # Main HTML template for the React app
├── src/
│   ├── components/            # Contains React components used across the app
│   │   ├── HomePage.js        # Homepage component that shows the slideshow, categories, and venue list
│   │   ├── CategoryPage.js    # Component for displaying a list of venues under a selected category
│   │   ├── VenueDetailPage.js # Component showing detailed information about a venue
│   │   ├── ReservationPage.js # Component handling the venue reservation process
│   │   ├── Slideshow.js       # Slideshow component displaying venue images
│   ├── data/                  # Contains mock data for venues and event categories
│   │   ├── venues.js          # Mock data for venue information, availability, and images
│   │   ├── categories.js      # Mock data for event categories
│   ├── App.js                 # Main application component managing routing between pages
│   ├── index.js               # Entry point for the React app
│   └── index.css              # Global CSS styles applied to the app
├── package.json               # Defines dependencies, scripts, and project metadata
└── README.md                  # Project documentation
```
## Key Files

- **`src/App.js`**:  
  This file acts as the main component of the application. It defines the routes using `react-router-dom` and links the homepage, category pages, venue detail pages, and reservation pages.

- **`src/components/`**:  
  This folder contains the core React components that form the app's UI:
  - **`HomePage.js`**:  
    Displays the homepage, which includes a slideshow of venues, event categories, and a list of child birthday venues.
  - **`CategoryPage.js`**:  
    Displays venues filtered by category. Each venue shows a photo, short description, and contact details. Users can click to see venue details.
  - **`VenueDetailPage.js`**:  
    Displays detailed information about a venue, including a gallery of images, full description, and contact information. It also provides a "Rezervēt" (Reserve) button for booking.
  - **`ReservationPage.js`**:  
    Handles the reservation process by showing a calendar where users can select a date and confirm a booking for the venue.
  - **`Slideshow.js`**:  
    Displays the homepage image slideshow with images from the `public/img` folder. It handles different image sizes for a consistent visual presentation.
  
- **`src/data/venues.js`**:  
  Contains mock data for venues, including venue names, descriptions, images, availability dates, and contact information.

- **`src/data/categories.js`**:  
  Contains mock data for event categories like "Child Parties," "Corporate Events," and "Bachelor/Bachelorette Nights."

- **`public/img/`**:  
  This folder contains the venue images used in the slideshow and individual venue detail pages. The images correspond to specific venues like `laserdog.png`, `bumbu-terapija.png`, and others.

- **`index.css`**:  
  Contains global CSS styles applied to the application to maintain consistency across all pages and components.

