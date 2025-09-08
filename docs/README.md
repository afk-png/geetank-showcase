# Geetank - Vibe Coder Portfolio

A modern, responsive portfolio website for Geetank, showcasing vibe coding skills and projects.

## 🚀 GitHub Pages Deployment

This website is designed to work directly on GitHub Pages without any build process or dependencies.

### Quick Setup:

1. **Fork or Clone** this repository
2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Set Source to "Deploy from a branch"
   - Select "main" branch and "/docs" folder
   - Click Save

3. **Add Background Music** (Optional):
   - Download audio file from: https://youtu.be/YJVmu6yttiw?si=bkuMoRi7MMe6CbpJ
   - Convert to MP3 format
   - Save as `ranking-music.mp3` in the `docs` folder
   - The website will automatically use this for background music

### Your site will be live at:
`https://yourusername.github.io/repository-name/`

## ✨ Features

- **Zero Dependencies**: Pure HTML, CSS, and JavaScript
- **Fully Responsive**: Optimized for desktop and mobile
- **Modern Design**: Blueish dark gradient theme with smooth animations
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Music Integration**: Optional background music support
- **Social Links**: GitHub profile and Discord username copying
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Customization

### Colors & Theme:
Edit the CSS variables in the `<style>` section of `index.html`:

```css
:root {
    --primary: 220 100% 65%;        /* Main blue color */
    --secondary: 270 85% 70%;       /* Purple accent */
    --accent: 190 100% 60%;         /* Cyan highlights */
    /* ... other variables */
}
```

### Content:
Update the HTML content in the hero section to match your information.

### Social Links:
- GitHub: Update the href in the GitHub button
- Discord: Update the username in the copyDiscord function

## 🛠️ File Structure

```
docs/
├── index.html              # Main website file
├── ranking-music.mp3       # Background music (optional)
└── README.md              # This file
```

## 🎵 Audio Setup

The website supports embedded background music. To enable:

1. Add your audio file as `ranking-music.mp3` in the docs folder
2. The site will automatically attempt to play it
3. Falls back to opening YouTube link if direct playback fails

## 📱 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Full responsive support

## ⚡ Performance

- No build process required
- Minimal file size
- Fast loading
- Optimized animations
- Efficient CSS and JavaScript

---

**Made with vibe coding by Geetank** ✨