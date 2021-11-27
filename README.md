# Developer fortune cookies
> This is a WIP.
Fortune cookies for developers. A simple Angular web application built using TailwindCSS.

![](https://raw.githubusercontent.com/ilmalte/developer-fortune-cookies/master/documents/demo.gif)

[Try it!](https://ilmalte.github.io/developer-fortune-cookies/)

### Why this project?
Fortune cookies is a project born to test a way I found online to organize an Angular project.
In the meanwhile I thought could be interesting to test TailwindCSS library for styling web application.

### What you can do?
Basically you can open developer fortune cookies and get inspired.
You can export the generated fortune cookie as an image or copy it to the clipboard.

### Open a fortune cookie in your native language
It supports localization but at the moment it's only available in English and in Italian.
By the way, you can contribute to this project by making a pull request with a translated json in your native language!

Example:
`fortune-cookies.it.json`

Please, refer [ISO 639-1 table](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
You have to add the language code to `traslations.enum.ts` in `src/app/core/models`. 
In this folder you will find `languages.enum.ts`: an enum with a complete list of language codes.

### Would you like to add extra fortune cookies?
If you would like to add one or more quotes, just do it! You can find the quotes in the `documents` folder. 
Edit the file `fortune-cookies.en.json`, make a pull request and wait!
Please consider to also edit the JSON in your native language if exists.

## How to run a development enviroment on your machine
After cloning and forking the repo you should: 
open the Angular folder, install required packages and then run the development environment.
By default it will run the web application on port 4200.
`cmd
    cd .\angular\
    npm install
    npm run dev
`

## Credit
Fortune cookies quotes come from a JSON file I found on Github. 
Unfortunately I couldn't find the original creator because many people have used it in their programs without giving credits.