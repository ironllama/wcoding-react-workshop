# React Workshop

The following are instructions to run the included example React projects.

You can clone this repo, and then in your Terminal/Command Line, use the following commands to get started.

Note that there is also a CodeSandbox link for these, if you want to try playing with the repo without cloning, downloading and running on your workstation. Create an account on `codesandbox.io` if you don't already have an account, then follow the link at the end of this paragraph. Once the project opens, select the "Fork project" option on the upper right. (Might be collapsed below the "Create Branch" option.) After you've forked to your own account, hit the small + next to the "Setup" tab on the right half of the UI and select a "New terminal" to enter the commands below. (Link: https://codesandbox.io/p/github/ironllama/wcoding-react-workshop/master)

### reactjs
This project is purely browser based. It will download all the ncessary libraries and do all the compiling on the browser. However, it does go back to pick up other JS files, so if you just double-click on `index.html` to display in your browser, you'll run into CORS issues. Instead, start a webserver:
- `cd reactjs`
- `npx http-server`
- In your browser, open the suggested port after the http-server finishes loading. By default, it is `localhost:3000`.

### weather-app-cra
This project was created using `npx create-react-app`. It is the classic way of starting a React project, but has lately fallen out of favor because of slow adoption of changes and features that were implemented by other frameworks and had become popular and expected with create-react-app. (See: https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741) Anyway, it still works and still does a decent enough job.
- `cd weather-app-cra`
- `npm install` (only has to be run once, the first time)
- `npm start`
- Open your browser to the suggested port after the previous task finishes building. By default it is `localhost:3000`.

### weather-app-next
This project was created using `npx create-next-app`. It is the newly recommended way of creating a React app, per the React documentation. It has a high initial time cost, but the feature set is rich and the framework has a lot of features.
- `cd weather-app-next`
- `npm install` (only has to be run once, the first time)
- `npm run dev` or `next dev`
- Open your browser to the suggested port after the previous task finishes building. By default it is `localhost:3000`.

### weather-app-vite
This project was created using `npx create vite@latest`. The `React` framework and `Javascript + SWC` options were selected. The SWC (Speedy Web Compiler) is a new JS/TS compiler, and competes with ESBuild, and is much faster than the standard Babel. It is also a smaller environment (fewer libraries), so it installs fast, builds fast, and runs fast.
- `cd weather-app-vite`
- `npm install` (only has to be run once, the first time)
- `npm run dev`
- Open your browser to the suggested port after the previous task finishes building. By default it is `localhost:5173`.

### todos
Another Next.js project.
