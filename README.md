# React Native Data Explorer

A React Native Data Explorer app built with **Expo** and **TheMealDB API** as part of **Week 6 — React Native Fundamentals**.

The app displays meal data from a live API and demonstrates searching, filtering, statistics, loading/error/empty states, safe areas, and dark mode on a physical Android device.

## Features

* 🔎 Search meals using `TextInput`
* 🍽️ Display meals using `FlatList`
* 🏷️ Filter meals using `Pressable` chips
* 📊 Display statistics using a reusable stats utility
* 🌙 Light and dark mode using React Context
* ⏳ Loading state with `ActivityIndicator`
* ❌ Error state with a Retry button
* 📭 Empty state when no meals are found
* 📱 Safe-area support using `react-native-safe-area-context`
* 👆 Visible press feedback for interactive elements
* 🖼️ Reusable meal cards
* 🌐 Data fetched at runtime from TheMealDB API
* 🛑 Request cancellation using `AbortController`

## Tech Stack

* React Native
* Expo
* JavaScript
* React Hooks
* React Context
* FlatList
* TheMealDB API
* `react-native-safe-area-context`

## Project Structure

```text
rn-data-explorer/
│
├── App.js
├── app.json
├── package.json
│
├── src/
│   ├── api/
│   │   └── mealApi.js
│   │
│   ├── components/
│   │   ├── ItemCard.js
│   │   ├── SearchBar.js
│   │   ├── FilterChips.js
│   │   ├── StatsSummary.js
│   │   ├── ThemeToggle.js
│   │   │
│   │   └── states/
│   │       ├── Loading.js
│   │       ├── ErrorState.js
│   │       └── Empty.js
│   │
│   ├── context/
│   │   └── ThemeContext.js
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── theme/
│   │   └── colors.js
│   │
│   └── utils/
│       └── stats.js
│
├── NOTES.md
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Install Safe Area support

```bash
npx expo install react-native-safe-area-context
```

### 3. Start the Expo development server

```bash
npx expo start
```

### 4. Run on Android

Open **Expo Go** on your physical Android phone and scan the QR code displayed by Expo.

Make sure your phone and computer are connected to the same network.

## API

This project uses **TheMealDB** for live meal data.

The search endpoint used by the application is:

```text
https://www.themealdb.com/api/json/v1/1/search.php?s=
```

The API returns a response containing a `meals` array. When no matching meal is found, the API can return `meals: null`.

The application normalises this response into an array so the React Native components can safely work with the data.

## Search and Filtering

### Search

The search field uses React Native's `TextInput` and `onChangeText`.

Search terms are sent to the server through the existing `useFetch` hook.

The request is cancelled using `AbortController` when the effect is cleaned up or the search term changes.

### Filter

The second filter uses `Pressable` chips.

The selected chip has a different visual appearance so the current filter is clear to the user.

The filter works together with the server-side search results.

## Statistics

Statistics are calculated using reusable functions in:

```text
src/utils/stats.js
```

The statistics summary is rendered through the `FlatList`'s:

```text
ListHeaderComponent
```

The empty case is guarded so the UI does not display invalid values such as `NaN`.

## Loading, Error and Empty States

The application has three separate UI states:

### Loading

`Loading.js`

Uses React Native's `ActivityIndicator` while data is being fetched.

### Error

`ErrorState.js`

Displays a meaningful error message and provides a Retry button.

### Empty

`Empty.js`

Displays a clear message when the search or filter produces no results.

## Mandatory Concepts

| Concept                      | Where it appears                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| `View`, `Text`, `Image`      | `src/components/ItemCard.js`                                                         |
| `StyleSheet.create`          | All UI components                                                                    |
| Flexbox layout               | `App.js`, `ItemCard.js`, `StatsSummary.js`                                           |
| `FlatList`                   | `App.js`                                                                             |
| `keyExtractor`               | `App.js`                                                                             |
| `ItemSeparatorComponent`     | `App.js`                                                                             |
| `ListEmptyComponent`         | `App.js`                                                                             |
| `TextInput` / `onChangeText` | `src/components/SearchBar.js`                                                        |
| `Pressable`                  | `FilterChips.js`, `ThemeToggle.js`, `ErrorState.js`                                  |
| Visible press feedback       | Interactive `Pressable` components                                                   |
| `ActivityIndicator`          | `src/components/states/Loading.js`                                                   |
| Custom `useFetch` hook       | `src/hooks/useFetch.js`                                                              |
| `AbortController`            | `src/hooks/useFetch.js`                                                              |
| Loading/error/empty states   | `src/components/states/`                                                             |
| API layer                    | `src/api/mealApi.js`                                                                 |
| Statistics utilities         | `src/utils/stats.js`                                                                 |
| Context provider             | `src/context/ThemeContext.js`                                                        |
| Context consumers            | `ItemCard.js`, `SearchBar.js`, `FilterChips.js`, `StatsSummary.js`, `ThemeToggle.js` |
| Dark mode                    | `ThemeContext.js` + `theme/colors.js`                                                |
| Safe area                    | `App.js`                                                                             |


## React Native Translation

This project started from the Data Explorer built in the previous week.

The main data-fetching and application logic was carried forward, while the rendering layer was translated from React Web to React Native.

Instead of HTML elements such as `div`, `p`, `img`, `button`, and `input`, the application uses React Native primitives such as `View`, `Text`, `Image`, `Pressable`, and `TextInput`.

Styling was also changed from CSS to `StyleSheet.create`, and the list was implemented using `FlatList`.

## What I Learned

React Native kept the React concepts I already knew, such as components, props, state, effects, hooks, and Context. The main difference was learning how those concepts are rendered using native components rather than DOM elements.

The biggest adjustment was translating web styling and controls into React Native equivalents. CSS does not carry over directly, so layout, spacing, lists, inputs, buttons, and safe areas need to be handled using React Native's APIs.

The project helped me understand that React Native is still React, but with a different rendering layer and a different set of UI primitives.
