# Week 6 — React Native Fundamentals

## NOTES.md

### 1. React Native is React. Name three things from Weeks 4 and 5 that work identically here, and two things that do not exist at all.

Components, props, state, hooks like `useState` and `useEffect`, and Context work almost the same way in React Native. The main difference is that React Native does not use the browser DOM, so things like `document` and `window` are not available.

---

### 2. Why must every string be inside a `<Text>` component? What is a `<View>` actually for?

React Native does not allow plain text directly inside a `View`. Every string or number that needs to appear on the screen must be placed inside `Text`, while `View` is mainly used as a container for arranging and grouping other components.

---

### 3. `flexDirection` defaults to `column` on native and `row` on the web. If your two elements are stacked vertically when you wanted them side by side, what is the fix?

React Native uses `column` as the default `flexDirection`, so children are placed vertically. If I want them beside each other, I use `flexDirection: "row"` in the parent style.

---

### 4. What does `flex: 1` do to a `View`? What happens to your `FlatList` if the `View` around it does not have it?

`flex: 1` tells a `View` to take the available space from its parent. If the parent of a `FlatList` does not have enough height, the list may not get enough space and can appear not to scroll correctly.

---

### 5. What is the difference between `ScrollView` and `FlatList`? At roughly what list size does the difference start to matter, and why?

`ScrollView` renders all of its children at once, while `FlatList` only renders the items that are needed around the visible area. The difference becomes more important as the list grows, especially with hundreds of items, because rendering everything at once can make the phone slower.

---

### 6. What does `keyExtractor` do? Why is the array index usually a poor choice, and what breaks?

`keyExtractor` gives every item in a `FlatList` a stable and unique key so React Native can keep track of list items efficiently. Using the array index is risky because the position can change when data is added, removed, or reordered, which can cause incorrect item updates.

---

### 7. Your `renderItem` returns `<View style={{ padding: 16 }}>`. Why is that inline object worse here than the equivalent was on the web? What should you do instead?

Creating the style object inside the render function means a new object can be created every time the component renders. I should use `StyleSheet.create()` and reference a named style such as `styles.card`, which keeps the styling cleaner and avoids unnecessary style-object creation.

---

### 8. What is `SafeAreaView` protecting your UI from? Name two hardware features it accounts for.

`SafeAreaView` helps keep the application's content away from parts of the phone screen that can cover or interfere with the UI. Two examples are the status bar/notch area at the top and the gesture/navigation area at the bottom.

In this project I used `SafeAreaProvider` and `SafeAreaView` from `react-native-safe-area-context`, as required by the assignment.

---

### 9. You copied `useFetch` from your web app to your native app. How much of it did you have to change, and what does your answer tell you about what React Native actually is?

I did not need to completely rewrite the fetching logic because JavaScript, `fetch`, React hooks, and asynchronous code still work in React Native. This showed me that React Native is still React, but instead of rendering HTML and the browser DOM, it renders native components such as `View`, `Text`, `Image`, and `FlatList`.

---

### 10. Which files did you copy from Week 5 without changing a single line? List them. Then explain what that tells you about where React ends and React Native begins.

The main files I carried over were my `useFetch` hook, API layer, and `stats.js` utility. The assignment specifically describes moving `hooks/useFetch.js`, the `api/` file, and the `utils/` file from Week 5 because they are plain JavaScript and the fetching logic can still work on native.

This showed me that the data and application logic can stay largely the same. The main change happens at the rendering layer, where web elements and CSS are replaced by React Native components and `StyleSheet`.

---

## Additional Reflection

### What was the hardest part of the translation?

The hardest part was translating the web layout and CSS into React Native styles. I especially had to get used to the fact that `flexDirection` defaults to `column` in React Native and that there is no normal CSS cascade or CSS file.

### What did I learn from the red screen errors?

The red screen was useful because it usually pointed toward the component or line where the problem happened. One important error I learned about was `Text strings must be rendered within a <Text> component`, which happens when text or a number is placed directly inside a `View`.

### What I learned from this week

The biggest thing I learned is that React Native keeps many of the React concepts I already knew, but the UI layer is different. `FlatList`, `Pressable`, `TextInput`, `SafeAreaView`, and `StyleSheet` made me think more about how an application behaves on an actual phone instead of only thinking about a browser.

I also learned that testing on a physical device is important. A layout that looks correct in code can still behave differently when scrolling, typing, tapping, or switching between light and dark mode.