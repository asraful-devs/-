# 🎙️ মুখে বলি - Voice to Text Transcription App

> **বাংলা এবং ইংরেজিতে কথা বলুন এবং তৎক্ষণাৎ লিখিত রূপ পান - স্মার্ট, দ্রুত এবং নির্ভুল।**

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-19.2.0-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.9.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/vite-7.2.2-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.1.17-38B2AC?logo=tailwindcss)

A modern, real-time speech recognition application that converts spoken words into text in multiple languages. Built with React, TypeScript, Vite, and powered by Web Speech API.

[Features](#-features) • [Getting Started](#-getting-started) • [Usage](#-how-to-use) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)

</div>

---

## ✨ Features

-   🎤 **Real-time Speech Recognition** - Convert your voice to text instantly with continuous listening mode
-   🌐 **Multi-Language Support** - Seamlessly switch between Bengali (bn-BD) and English (en-US)
-   📋 **Easy Text Management** - Copy transcribed text with one click with visual feedback
-   🗑️ **Clear Functionality** - Reset and start fresh anytime with a single button
-   💫 **Beautiful UI** - Modern, responsive design with smooth animations and glassmorphism effects
-   ⚡ **Fast & Efficient** - Built with Vite for optimal performance and rapid development
-   📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
-   🎨 **Dark Theme** - Eye-friendly interface with gradient effects and animated blobs
-   📊 **Character Counter** - Keep track of your transcription length in real-time
-   ✏️ **Editable Transcript** - Edit recognized text directly in the textarea
-   🔔 **Live Recording Indicator** - Visual and animated feedback when recording is active

---

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (v16 or higher)
-   **npm** or **yarn** package manager
-   Modern browser with Web Speech API support (Chrome, Edge, Safari)

## 📖 How to Use

### Starting a Recording

1. **Open the Application** - Visit the application in your web browser
2. **Select Language** - Click on your preferred language button (বাংলা or English)
3. **Start Recording** - Click the "রেকর্ডিং শুরু করুন" (Start Recording) button
4. **Grant Permission** - Allow browser access to your microphone when prompted
5. **Speak Clearly** - Speak into your microphone naturally

### Stopping a Recording

-   Click the "রেকর্ডিং বন্ধ করুন" (Stop Recording) button (turns red while recording)
-   The app will process and display your transcription

### Managing Your Text

| Action    | Button        | Function                                                  |
| --------- | ------------- | --------------------------------------------------------- |
| **Copy**  | 🟢 কপি করুন   | Copy the transcript to clipboard with visual confirmation |
| **Clear** | 🟠 মুছে ফেলুন | Clear the text and reset the app to start over            |
| **Edit**  | Edit directly | Click in the text area to modify the transcript manually  |

---

## 📦 Tech Stack

### Frontend Framework

-   **React** (v19.2.0) - UI library with hooks
-   **React DOM** (v19.2.0) - React rendering for web

### Speech Recognition

-   **react-speech-recognition** (v4.0.1) - React hooks wrapper for Web Speech API

### Styling & UI

-   **Tailwind CSS** (v4.1.17) - Utility-first CSS framework
-   **Tailwindcss Vite** (v4.1.17) - Vite plugin for Tailwind CSS
-   **Lucide React** (v0.553.0) - Beautiful, consistent icon library

## 📁 Project Structure

```
মুখে-বলি/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── BrowserSupportsSpeechRecognition.tsx  # Browser compatibility check
│   │   ├── Help.tsx                              # Help/FAQ component
│   │   └── languages.ts                          # Language configuration
│   ├── App.tsx          # Main application component with speech recognition logic
│   ├── App.css          # Component-specific styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and animations
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript base configuration
├── tsconfig.app.json    # TypeScript app configuration
├── tsconfig.node.json   # TypeScript node configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # This file
```

---

## 🌍 Supported Languages

| Language | Code  | Status             |
| -------- | ----- | ------------------ |
| Bengali  | bn-BD | ✅ Fully Supported |
| English  | en-US | ✅ Fully Supported |

You can easily add more languages by updating the `src/components/languages.ts` file with new language codes and configurations.

---

## 🎨 Design Highlights

### Visual Features

-   **Gradient Background** - Dynamic animated gradient with blur effects and layered blobs
-   **Glass Morphism** - Modern card design with backdrop blur and semi-transparent elements
-   **Responsive Layout** - Mobile-first design optimized for all screen sizes
-   **Smooth Animations** - Interactive feedback with fade-in, pulse, and blob animations
-   **Color Scheme** - Purple, cyan, and pink color palette for visual appeal

### UI/UX Elements

-   **Glassmorphic Cards** - Modern, layered visual aesthetic
-   **Color-Coded Language Selection** - Visual distinction between selected and unselected languages
-   **Interactive Buttons** - Scale and transform on hover for better feedback
-   **Real-time Indicators** - Visual feedback showing recording status
-   **Accessibility** - Clear button states and visual indicators for all interactions

---

## 🌐 Browser Compatibility

| Browser | Desktop | Mobile | Notes                        |
| ------- | ------- | ------ | ---------------------------- |
| Chrome  | ✅      | ✅     | Full support, recommended    |
| Edge    | ✅      | ✅     | Full support, Chromium-based |
| Safari  | ✅      | ✅     | Full support (v14.1+)        |
| Firefox | ⚠️      | ⚠️     | Limited support              |
| Opera   | ✅      | ✅     | Full support                 |

**Note:** Web Speech API requires HTTPS in production environments. The app includes a browser compatibility check component.

---

## 🔐 Privacy & Data

-   **No Data Collection** - All processing happens locally in your browser
-   **No Cloud Storage** - Your transcriptions are never sent to any server
-   **No Tracking** - No analytics or tracking cookies
-   **Complete Privacy** - Your voice and text remain entirely on your device
-   **No Account Required** - Use the app without registration

---

## 🐛 Troubleshooting

### Microphone Not Working

-   ✅ Ensure you've granted browser permission to access the microphone
-   ✅ Check that your microphone is working properly in system settings
-   ✅ Try using a different browser (Chrome/Edge recommended)
-   ✅ Restart your browser and try again

### Speech Recognition Not Available

-   ✅ This feature requires a modern browser with Web Speech API support
-   ✅ Not all browsers support all languages
-   ✅ Try refreshing the page
-   ✅ Check browser console for error messages (F12 key)

### Text Not Appearing

-   ✅ Speak clearly and wait for the browser to process
-   ✅ Ensure you've selected the correct language
-   ✅ Check that your selected language matches your speech
-   ✅ Try using a quieter environment for better recognition

### Performance Issues

-   ✅ Clear browser cache and cookies
-   ✅ Disable browser extensions
-   ✅ Close other resource-heavy applications
-   ✅ Use a modern browser for best performance

---

## 🎓 Learning Resources

-   [Web Speech API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
-   [React Documentation](https://react.dev)
-   [React Hooks Guide](https://react.dev/reference/react/hooks)
-   [TypeScript Handbook](https://www.typescriptlang.org/docs/)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Vite Guide](https://vitejs.dev/guide/)

---

### Ways to Contribute

-   🐛 Report and fix bugs
-   ✨ Suggest and implement new features
-   📚 Improve documentation
-   🎨 Enhance UI/UX design
-   🌐 Add language support
-   ⚡ Optimize performance

---

## 📝 License

This project is open source and available under the **MIT License**. Feel free to use it for your personal and commercial projects.

---

## 👨‍💻 Author

**Md Asraful**

-   💼 GitHub: [@asraful-devs](https://github.com/asraful-devs)

---

---

## 🎯 Future Enhancements

-   Voice settings (speed, pitch adjustment)
-   Real-time translations
-   Export to multiple formats
-   Cloud sync option (optional)
-   Mobile app version
-   Browser extension
-   API for third-party integrations

---

<div align="center">

**Happy Transcribing! 🎉**

Made with ❤️ by Md Asraful

_Last Updated: November 2025_

</div>

```


```

# -
