#This application is to be built as a Basic Version
# CS Learning Guide Android App

A comprehensive computer science learning guide Android application covering topics from hardware to software with organized educational content.

## Project Structure

This Android application uses a WebView-based approach to display web content inside a native Android container.

### Key Components:

- **Android App Shell**: A simple Android application that uses WebView to display the web content
- **Web Content**: HTML, CSS, and JavaScript files that provide the actual learning guide interface

### Directory Structure:

```
app/
├── src/
│   └── main/
│       ├── java/com/cslearningguide/
│       │   └── MainActivity.java      # Main Android activity with WebView
│       ├── res/
│       │   ├── layout/
│       │   │   └── activity_main.xml  # Layout with WebView
│       │   ├── values/
│       │   │   └── strings.xml        # App strings
│       │   └── mipmap*/               # App icons
│       ├── assets/                    # Web content
│       │   ├── index.html
│       │   ├── styles.css
│       │   ├── app.js
│       │   └── data.js
│       └── AndroidManifest.xml        # App manifest
├── build.gradle                       # App-level build config
```

## Features

- Comprehensive CS topics from hardware to software
- Interactive learning interface
- Topic search functionality
- Offline access to all content

## Developer

Developed by: Dileep Kumar Singu

## How to Build and Run

### Prerequisites

- Android SDK
- Gradle

### Build Steps

1. Clone this repository
2. Open in Android Studio or use Gradle from the command line:
   ```
   ./gradlew assembleDebug
   ```
3. The APK will be generated in `app/build/outputs/apk/debug/app-debug.apk`

## License

© 2025 All Rights Reserved
