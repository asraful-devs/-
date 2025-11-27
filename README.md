# ভয়েস টু টেক্সট - Voice to Text Application

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-19.2.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.9.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/vite-7.2.2-646cff?logo=vite)

A modern, responsive voice-to-text conversion application built with **React**, **TypeScript**, and **Vite**. Convert your speech into text seamlessly in Bengali and English languages.

[Features](#features) • [Getting Started](#getting-started) • [Usage](#usage) • [Technology Stack](#technology-stack) • [Project Structure](#project-structure)

</div>

---

## 🎯 Overview

**ভয়েস টু টেক্সট** is a progressive web application that leverages the Web Speech API to convert spoken words into written text. The application supports multilingual input (Bengali and English) with a beautiful, intuitive user interface powered by Tailwind CSS and modern animations.

### Key Highlights

-   ✨ **Real-time Speech Recognition** - Converts voice to text instantly
-   🌐 **Multilingual Support** - Bengali (bn-BD), English (en-US), English (en-GB), and more
-   🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
-   📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
-   ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
-   🔐 **Type-Safe** - Written in TypeScript for better code reliability
-   🎯 **Feature-Rich** - Copy, clear, and edit transcribed text

---

## ✨ Features

### Core Features

-   **Voice Recognition**: Continuous speech-to-text conversion
-   **Language Selection**: Choose between multiple languages from an intuitive selector
-   **Editable Transcript**: Edit recognized text directly in the textarea
-   **Copy to Clipboard**: One-click copy functionality with visual feedback
-   **Clear Text**: Quick clear button to reset the transcript
-   **Character Counter**: Real-time character count display
-   **Live Recording Indicator**: Visual feedback showing when the app is listening

### User Experience

-   **Animated UI Elements**: Smooth transitions and interactive animations
-   **Responsive Design**: Optimized for all device sizes
-   **Glassmorphism Design**: Modern, layered visual aesthetic
-   **Color-Coded Language Selection**: Visual distinction between selected and unselected languages
-   **Help Component**: Built-in guidance for users
-   **Toast Notifications**: Feedback for copy action

---

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (v16 or higher)
-   **npm** or **yarn** package manager

### Installation

1. **Clone the repository** (or extract the project files)

    ```bash
    cd my-voice-app
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
    - Navigate to `http://localhost:5173` (default Vite port)
    - The application will hot-reload on file changes

---

## 📖 Usage

### Starting a Recording

1. Click the **"রেকর্ডিং শুরু করুন"** (Start Recording) button
2. Allow browser permission for microphone access when prompted
3. Speak clearly in your selected language
4. The transcript will appear in real-time

### Stopping a Recording

-   Click the **"রেকর্ডিং বন্ধ করুন"** (Stop Recording) button
-   The button will turn red and pulse while recording

### Managing Your Transcript

-   **Copy**: Click the green copy button to copy text to clipboard
-   **Clear**: Click the orange clear button to reset everything
-   **Edit**: Click directly in the textarea to edit the transcribed text

### Changing Language

-   Select your preferred language from the language selector buttons
-   Available options include Bengali and English variants
-   Each language has a unique color gradient

---

## 🛠️ Technology Stack

### Frontend Framework & Tooling

| Technology       | Purpose                 | Version |
| ---------------- | ----------------------- | ------- |
| **React**        | UI Library              | 19.2.0  |
| **TypeScript**   | Type Safety             | 5.9.3   |
| **Vite**         | Build Tool & Dev Server | 7.2.2   |
| **Tailwind CSS** | Utility-First CSS       | 4.1.17  |

### Libraries & Dependencies

| Package                      | Purpose                        | Version |
| ---------------------------- | ------------------------------ | ------- |
| **react-speech-recognition** | Speech Recognition API Wrapper | 4.0.1   |
| **lucide-react**             | Icon Component Library         | 0.553.0 |
| **@tailwindcss/vite**        | Tailwind CSS Vite Plugin       | 4.1.17  |

### Development Tools

| Tool           | Purpose                         |
| -------------- | ------------------------------- |
| **ESLint**     | Code Linting                    |
| **TypeScript** | Static Type Checking            |
| **Vite**       | Fast Development Server & Build |

---

## 📁 Project Structure

```
my-voice-app/
├── src/
│   ├── components/
│   │   ├── BrowserSupportsSpeechRecognition.tsx    # Browser compatibility check
│   │   ├── Help.tsx                                # Help/FAQ component
│   │   └── languages.ts                            # Language configuration
│   ├── App.tsx                                      # Main application component
│   ├── App.css                                      # App-level styles
│   ├── main.tsx                                     # Application entry point
│   └── index.css                                    # Global styles
├── public/                                          # Static assets
├── index.html                                       # HTML entry point
├── package.json                                     # Project dependencies
├── vite.config.ts                                   # Vite configuration
├── tsconfig.json                                    # TypeScript configuration
├── tsconfig.app.json                                # TypeScript app config
├── tsconfig.node.json                               # TypeScript node config
├── eslint.config.js                                 # ESLint configuration
└── README.md                                        # This file
```

---

## 💻 Available Scripts

### `npm run dev`

Starts the development server with Hot Module Replacement (HMR)

```bash
npm run dev
```

### `npm run build`

Compiles TypeScript and builds for production

```bash
npm run build
```

### `npm run lint`

Runs ESLint to check code quality

```bash
npm run lint
```

### `npm run preview`

Preview the production build locally

```bash
npm run preview
```

---

## 🎨 Design Features

### Visual Elements

-   **Gradient Backgrounds**: Dynamic gradients with animated blobs
-   **Glassmorphism UI**: Semi-transparent cards with backdrop blur
-   **Smooth Animations**: Fade-in, pulse, and blob animations
-   **Color Scheme**: Purple, cyan, and pink color palette
-   **Responsive Grid**: Adapts to different screen sizes

### Interactive Components

-   **Language Buttons**: Color-coded, scalable on hover
-   **Recording Button**: Changes color and style based on state
-   **Textarea**: Customizable with live character count
-   **Action Buttons**: Copy and Clear with disabled states

---

## 🌐 Browser Compatibility

The application uses the Web Speech API, which is supported in:

-   ✅ Chrome/Edge (Desktop & Android)
-   ✅ Safari (iOS 14.5+)
-   ✅ Firefox (via flags)

**Note**: The app includes a browser compatibility check component.

---

## 🔧 Configuration

### Language Configuration

Languages are configured in `src/components/languages.ts`. Each language includes:

-   Language code for the Web Speech API
-   Display label
-   Color gradient

### Tailwind CSS

Custom animations and styles are configured in the CSS files:

-   `src/index.css` - Global animations and utilities
-   `src/App.css` - App-specific styles

---

## 🚀 Performance Optimization

-   **Vite**: Ultra-fast build tool with optimized bundling
-   **Tree Shaking**: Unused code is automatically removed
-   **Code Splitting**: Lazy loading of components
-   **TypeScript**: Compile-time type checking reduces runtime errors
-   **Tailwind CSS**: Optimized CSS with only used styles included

---

## 📝 File Descriptions

| File                                   | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| `App.tsx`                              | Main application component with speech recognition logic |
| `BrowserSupportsSpeechRecognition.tsx` | Checks browser compatibility with Speech API             |
| `Help.tsx`                             | Help section with instructions and FAQs                  |
| `languages.ts`                         | Configuration for supported languages                    |
| `index.html`                           | HTML entry point with root div                           |
| `main.tsx`                             | React application bootstrap                              |
| `vite.config.ts`                       | Build and dev server configuration                       |

---

## 🐛 Troubleshooting

### Microphone Not Working

-   Ensure the browser has permission to access the microphone
-   Check if HTTPS is enabled (required for production)
-   Try a different browser if issues persist

### Text Not Appearing

-   Verify you're using a supported browser
-   Check the browser console for errors
-   Ensure the selected language matches your speech

### Performance Issues

-   Clear browser cache
-   Disable browser extensions
-   Close other resource-heavy applications

---

## 🎓 Learning Resources

-   [React Documentation](https://react.dev)
-   [TypeScript Handbook](https://www.typescriptlang.org/docs/)
-   [Vite Guide](https://vitejs.dev)
-   [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
-   [Tailwind CSS](https://tailwindcss.com)

---

## 👨‍💻 Author

**Md Asraful**

Created with ❤️ Md Asraful

---

## 📄 License

This project is licensed under the MIT License - feel free to use it for your projects.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

-   Report bugs
-   Suggest features
-   Submit pull requests

---

## 🎯 Future Enhancements

-   [ ] More language support
-   [ ] Dark/Light mode toggle
-   [ ] Voice settings (speed, pitch)
-   [ ] Export to PDF/DOC
-   [ ] Offline support with Service Workers
-   [ ] Voice commands for actions
-   [ ] History of transcriptions

---

## 📞 Support

For issues, questions, or suggestions, please open an issue on the repository.

---

<div align="center">
Made with ❤️ by Md Asraful
</div>

```


```
# -
