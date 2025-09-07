# D&D Monster Card Maker

A web application that creates MTG-style cards for Dungeons & Dragons monsters. Design beautiful, professional-looking cards with all the essential monster information including stats, abilities, and actions.

## Features

- **Bilingual Support**: Full interface in English and Portuguese (🇺🇸🇧🇷)
- **Expanded Card Size Design**: Extra-large format cards (420x800px) with generous space for complex monsters
- **Larger Art Space**: 220px height image area for better artwork display
- **Extended Description Areas**: Each section can hold up to 180px of scrollable content
- **Multiple Color Themes**: Choose from 9 different card color themes including Metal for constructs
- **Card Type Logos**: Add thematic emojis to represent different monster types and elements
- **Enhanced Image Positioning**: Full-size image display with precise positioning controls
- **Complete Monster Stats**: Include all D&D monster information (AC, HP, ability scores, etc.)
- **Text Formatting**: Use **bold**, *italic*, and ***bold italic*** formatting in descriptions
- **Real-time Preview**: See your card update as you type
- **Image Support**: Add monster artwork via URL with advanced positioning controls
- **Special Abilities & Actions**: Full support for complex monster abilities with extensive formatting
- **Download as Image**: Export your cards as high-quality PNG images
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. **Choose Language**: Select English (🇺🇸) or Portuguese (🇧🇷) from the dropdown in the top-right corner
2. **Open the App**: Simply open `index.html` in your web browser
3. **Fill in Monster Details**: 
   - Enter the monster name, type, and size
   - Add armor class, hit points, and speed
   - Input the six ability scores (STR, DEX, CON, INT, WIS, CHA)
   - Set the challenge rating
4. **Customize Appearance**:
   - Choose a color theme from the dropdown (Red for dragons, Metal for constructs, etc.)
   - Select a thematic logo to represent the monster type or element
   - Add an image URL for monster artwork
   - Use the enhanced positioning sliders to move and scale the image:
     - **Horizontal/Vertical**: -100 to +100 range for precise positioning
     - **Scale**: 25% to 300% for perfect sizing
     - **Reset button**: Quickly return to center position
5. **Format Text**: Use markdown-style formatting:
   - `**bold text**` for **bold text**
   - `*italic text*` for *italic text*
   - `***bold italic***` for ***bold italic text***
6. **Special Abilities**: List special abilities, one per line (format: "Name. Description")
7. **Actions**: List monster actions, one per line (format: "Name. Description")
8. **Preview**: The card updates automatically as you type
9. **Download**: Click "Download Card" to save as a PNG image

## Language Features

- **Automatic Interface Translation**: All labels, buttons, and help text translate instantly
- **Persistent Language Setting**: Your language choice is remembered between sessions
- **Localized Sample Data**: Sample monsters are translated for each language
- **Mixed Content Support**: Interface translates while allowing card content in any language

## Card Color Themes

- **Classic Brown**: Traditional fantasy look
- **Red**: Perfect for fire creatures, dragons, devils
- **Blue**: Ideal for water/ice creatures, spirits
- **Green**: Great for nature creatures, beasts, plants
- **Black**: Perfect for undead, fiends, shadow creatures
- **White**: Excellent for celestials, light-based creatures
- **Purple**: Ideal for aberrations, psychic creatures
- **Metal**: Perfect for constructs, golems, mechanical creatures
- **Gold**: Reserved for legendary and epic monsters

## Card Type Logos

Choose from 15 different thematic logos to represent your monster's type or primary element:

- 🔥 **Fire** - Dragons, fire elementals, devils
- 💧 **Water** - Water elementals, sea creatures
- 🌿 **Nature** - Beasts, plants, fey creatures  
- ⚡ **Lightning** - Storm creatures, air elementals
- 🔨 **Hammer/Forge** - Dwarven creatures, smiths
- ⚔️ **Combat** - Warriors, fighters, barbarians
- 🛡️ **Defense** - Guardians, paladins, protectors
- 💀 **Death/Undead** - Zombies, skeletons, liches
- ✨ **Magic** - Wizards, magical creatures
- 👑 **Royal/Noble** - Kings, nobles, authority figures
- 🐉 **Dragon** - All dragon types
- 🌙 **Night/Shadow** - Shadow creatures, rogues
- ☀️ **Light/Holy** - Angels, celestials, clerics
- 🧠 **Mind/Psychic** - Mind flayers, aberrations
- ⚙️ **Mechanical** - Constructs, warforged, modrons

## Sample Data

To quickly test the app, open the browser console and run:
```javascript
loadSampleData()
```

This will populate the form with an Ancient Red Dragon example in the current language (English or Portuguese).

## Keyboard Shortcuts

- **Ctrl + S**: Download the current card
- **Ctrl + Enter**: Regenerate the card

## Technical Details

- **Pure Web Technologies**: HTML, CSS, and vanilla JavaScript
- **No Dependencies**: Runs entirely in the browser
- **Image Generation**: Uses html2canvas for PNG export
- **Responsive Design**: CSS Grid and Flexbox for layout

## File Structure

```
dnd-card-maker/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Compatibility

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## Future Enhancements

- Card templates for different monster types
- Batch processing for multiple monsters
- Integration with D&D APIs
- Custom card backgrounds and themes
- Print-friendly layouts

## License

Open source - feel free to modify and distribute.

---

**Created for D&D enthusiasts who want beautiful monster cards for their campaigns!**
