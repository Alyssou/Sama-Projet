   # Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Structure

This project uses Expo Router for navigation and is organized into multiple screens for a multi-screen mobile application.

## Technical Specifications

- Built with React Native
- Implements navigation between screens
- Supports font loading
- Configures image assets

## Detailed Setup Instructions

1. **Create the Project**:
   ```bash
   npx create-expo-app MyReactNativeApp
   ```

2. **Install Necessary Dependencies**:
   Ensure the following dependencies are included in your `package.json`:
   - `expo-router`
   - `expo-font`
   - `expo-splash-screen`
   - `@react-navigation/native`
   - `@react-navigation/bottom-tabs`

3. **Configure Navigation**:
   Set up your navigation structure in `_layout.tsx` using `expo-router`.

4. **Add Images and Fonts**:
   Place your images in the `assets/images` directory and load fonts using `expo-font`.

5. **Implement a Splash Screen**:
   Configure the splash screen in `app.json` under the `plugins` section.

## Specific Requirements

- Implement a splash screen
- Configure global styles
- Set up a consistent design system
- Ensure cross-platform compatibility

## Recommended Best Practices

- Use TypeScript (optional but recommended)
- Implement proper error handling
- Create reusable components
- Optimize performance

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
