# Flashcard Learning Application

A simple, responsive web application for learning and memorizing words, phrases, and their meanings using flashcards. The application supports multiple word lists, tracks known/unknown words, and provides an interactive learning experience.

## Features

- 📱 Mobile-first responsive design
- 🔍 Real-time search functionality
- ✨ Interactive flashcards with Bootstrap carousel
- 💾 Local storage persistence
- ➕ Add new word lists via JSON
- 📊 Track known and unknown words
- 🔄 Progress tracking with last reviewed date
- 🎯 Toast notifications for user actions

## Usage Guide

### Viewing Word Lists

- All word lists are displayed on the home page as cards
- Each card shows the list name and number of cards in that list
- Click the "Start" button on any list to begin reviewing flashcards

### Using Flashcards

1. Navigate between cards using:
   - Left/right arrow buttons
   - Swipe on mobile devices
   
2. For each card, you can:
   - View the word and its meanings in Bengali and English
   - Read example sentences
   - See similar words
   - Mark as "Known" or "Unknown"

3. Progress is automatically saved to your browser's local storage

### Search Functionality

Use the search bar at the top of the page to filter word lists by name.

### Adding New Word Lists

1. Click the "Add New Word List" button
2. In the modal, paste a properly formatted JSON object following this structure:

```javascript

  "Title": "New Words",    // Name of your list
  
  [
    {
      "cardId": 1,
      "word": "Example",
      "banglaMeaning": ["উদাহরণ"],
      "englishMeaning": "A representative instance",
      "examples": [
        "This is an example sentence",
        "Here's another example"
      ],
      "similarWords": ["Instance", "Sample", "Case"],
      "lastReviewed": null
    }
  ]

```
## Generate word with AI

```text
  You: Provide me a word with all information expected as following JSON format.
       if you understand, then I'll send you a list of word.
  AI : Sure, Send me the list.
  You: ["Accomplish", "Adapt", "Ambitious", "Appreciate", "Aspect", "Challenge"]
  AI: You'll Get the JSON Data, You can in your flashcard app
  


```

## Data Storage

- All data is stored in your browser's local storage
- Progress is automatically saved
- Data persists between sessions
- Clear browser data/cache to reset all progress

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Other modern browsers with local storage support

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- Bootstrap for UI components
- Local Storage API for data persistence
- JSON for data structure

## Support

For support or questions, please open an issue in the repository or contact the maintainers.