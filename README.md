# Pokémon

A simple and stylish Pokémon gallery app built using React, Tailwind CSS, and the Pokémon API. This app allows users to browse through a list of Pokémon, view their details in a modal, and search for specific Pokémon by name.

## Demo

You can view the live version of the app [here](https://pokemon-kaushik.netlify.app/). 

## Features

- **Pokémon Listing**: Displays a gallery of Pokémon fetched from the Pokémon API.
- **Search Functionality**: Filter the Pokémon list by name.
- **Detailed View**: Click on any Pokémon card to view detailed stats, abilities, types, height, and weight in a modal.
- **Smooth Animations**: Hover effects and transitions for enhanced user experience.
- **Responsive Design**: Fully responsive layout, works well on mobile and desktop screens.
- **Scroll Lock and Click-to-Close**: Modal locks the background scroll and closes when clicking outside of it.

## Screenshots

### Pokémon Gallery Page
![image](https://github.com/user-attachments/assets/c98e253e-6bfa-4a9d-8052-4db06168bbc4)


### Pokémon Details Modal
![image](https://github.com/user-attachments/assets/35741f11-ed44-42be-b4da-d7789e9bcc59)


## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and layout.
- **Pokémon API**: For fetching Pokémon data.
- **JavaScript (ES6+)**: For handling logic and interactivity.

## Setup and Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine. You can download them [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kaushik17tripathi/pokemon.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd pokemon
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Project Structure

```
.
├── public
│   └── ...
├── src
│   ├── components
│   │   └── PokemonCard.js   # Component for individual Pokémon details modal
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point for the app
│   └── ...
├── package.json
└── README.md
```

## Future Improvements

- Add pagination for Pokémon list.
- Improve the styling further with advanced animations.
- Implement additional Pokémon filtering options (by type, ability, etc.).
- Add Pokémon comparison functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
