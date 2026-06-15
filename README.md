# React + Vite

## Google Analytics

Set `GA_MEASUREMENT_ID` to the GA4 measurement ID for the deployment, for example:

```env
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The global GA loader is in `index.html` and only runs when this variable is set.

## Story Routing

The app uses React Router. To add a story page:

1. Add the path in `src/storyPaths.js`.
2. Create the story component, usually by duplicating `src/RaghdaStoryPage.jsx`.
3. Import the component in `src/App.jsx`.
4. Add it to the `storyRoutes` map in `src/App.jsx`.
5. Assign the matching `storyPath` to the profile image in the landing/story carousel data.

Production hosting must rewrite story URLs such as `/stories/raghda` to `index.html`, because routing is handled client-side.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
