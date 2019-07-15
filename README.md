# just-be-frank
A React app using Nextjs, that catalogues the music of Frank Sinatra.

## Do stuff

### Run the app in development mode
`yarn dev` or `npm run dev`

The app will be available on [http://localhost:3000](http://localhost:3000). It will reload if you make edits, and errors will appear in the console.

### Build and run the app in production
`yarn build` or `npm run build`

The app will be built for production in the `.next` folder. It bundles React in production mode and optimises the build for best performance.

`yarn start` or `npm run start`

The app will start in production mode.

## Some oddities, and why they exist

### Linting
There are some changes and ammendments to the React, Typescript and Airbnb rules.

#### Use 2 space indentation
You're asking for a mess with 4 space indentation, particularly in JSX.

#### Do not force one expression per line
One expression per line is a good idea, except in JSX. Inline tags such as `<span>` or `<strong>` make a hard linting rule almost impossible to work with. Use your own discipline to implement the 'one expression per line' rule where appropriate.

#### Don't check anchor tags for validity
`jsx-a11y` attempts to ensure that all `<a>` tags have a valid `href`. This is not compatible with Nextjs, which requires its `<Link>` elements, which house the relevant `href`, to have an anchor as their first and only child. Why does Zeit think this is a good idea? Nobody knows.
