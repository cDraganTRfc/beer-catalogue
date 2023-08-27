# React + Vite

# Beer Catalogue

Welcome to the Brewery App! This app provides information about various beers using the Punk API. It allows you to search for beers, view their details, and sort them based on different criteria.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styles](#styles)
- [Helpers](#api)
- [Images](#logos)

## Installation

To run this application locally, follow these steps:

1. Clone the repository: `https://github.com/cDraganTRfc/beer-catalogue`
2. Navigate to the project directory: `cd beer-catalogue`
3. Install dependencies: `npm install`
5. Open your web browser and go to `http://localhost:5173/`

## Usage

- Home Page: The main page of the app displays a list of beers. You can use the search and sort filters to customize your view.
- Beer Details: Click on a beer card to view detailed information about a specific beer.
- Navigation: The navigation bar allows you to return to the home page from any section of the app.

## Components

- `Home`: Displays a list of beers fetched from the Punk API.
- `BeerCard`: Displays detailed information about a specific beer.
- `NavBar`: Provides navigation links and branding for the app.
- `NotFound`: Shown when accessing an undefined route.
- `SearchFilter`: Allows users to search for beers by name.
- `SortFilter`: Allows users to sort beers based on different criteria.
- `Loader`: Displays a loading animation while fetching data.

## Styles

The app uses SCSS for styling. Key style files include:

- `beer.scss`: Styles for the individual beer cards.
- `beercard.scss`: Styles for the beer details page.
- `loader.scss`: Styles for the loading animation.
- `navbar.scss`: Styles for the navigation bar.
- `notfound.scss`: Styles for the not-found page.
- `searchfilter.scss`: Styles for the search filter.
- `sortfilter.scss`: Styles for the sort filter.

## API

The app fetches beer data using the Punk API. The API module is located in `helpers/api.js` and `helpers/fetchData.js`.

## Credits

This app was created by Dragan Trifunovic. Feel free to contribute Bitcoin on 1JraHFPq5HXqH9xawrT8nLLB92CQuvxAnh or provide feedback.

Enjoy exploring different beers!