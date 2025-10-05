# Travel Bot 🌍

A simple and interactive travel assistant web application built with HTML, CSS, and JavaScript.

## Features

- **Interactive Chat Interface**: Engage with the travel bot through a user-friendly chat interface
- **Travel Assistance**: Get help with:
  - Travel destination recommendations
  - Hotel suggestions
  - Flight information
  - Travel tips and advice
  - Weather information
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## Files Structure

```
Travel_bot/
├── index.html      # Main HTML file with the chat interface
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript for bot functionality
└── README.md       # Project documentation
```

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aditya-jp110/Travel_bot.git
   cd Travel_bot
   ```

2. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

3. **Start chatting**:
   - Type your travel-related questions in the input field
   - Ask about destinations, hotels, flights, tips, or weather
   - Press Enter or click the Send button to get responses

## Access Control

This repository can be configured with limited access through GitHub settings:
- Go to **Settings** → **Manage Access**
- Invite specific collaborators
- Set repository visibility (Private/Public)

## Making Changes

When you make changes to any file (HTML, CSS, or JS):

1. **Edit the files** using your preferred code editor
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
3. **Push to repository**:
   ```bash
   git push origin main
   ```

The repository will automatically update with your changes.

## Customization

### Adding New Responses
Edit `script.js` and add new responses to the `responses` object:
```javascript
const responses = {
    destinations: [...],
    hotels: [...],
    // Add your custom categories
};
```

### Changing Colors
Modify the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding New Features
- Extend the `generateResponse()` function in `script.js`
- Add new UI elements in `index.html`
- Style them in `styles.css`

## Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6)**: Interactive functionality and bot logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Integration with real travel APIs
- User preferences and history
- Multi-language support
- Voice input/output capabilities
- Location-based suggestions

## License

This project is open source and available for personal and educational use.

## Contact

For questions or suggestions, please open an issue in the repository.

---

**Enjoy planning your travels with Travel Bot! ✈️🏨🗺️**