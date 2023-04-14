![image](https://user-images.githubusercontent.com/57394564/231907346-a95a74c9-6d1b-4957-b579-b222f3d3700b.png)

## Get Started
1. Clone and fork this repository
2. Run command `npm install` to download all depedencies
3. Run with command `npm start`

## Folder Structure

```
├── public
│   ├── index.html
│   └── ...
|
└── src
    ├── components
    │   ├── atoms
    │   │   ├── index.js 
    |   |   ├── styles.module.css
    │   ├── molecules
    │   │   ├── ...
    │   └── organisms
    │       ├── ...
    |
    ├── pages
    │   ├── Home
    │       ├── index.js
    │       ├── styles.module.css
    │       └── ...
    |
    ├── templates
    │   ├── Footer
    |   ├── Header
    |
    ├── App.js
    ├── index.js
    └── ...
```

- The `components` folder contains sub-folders for `atoms, molecules, and organisms`, each containing React components with different levels of abstraction.
- The `pages` folder contains the main pages that use components from the components folder to build the application's interface. 
- The `templates` folder contains various templates files that can be used in this project.
