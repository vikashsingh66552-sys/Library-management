# Smart Library Management System (Angular)

This version adapts the uploaded HTML assignment into an Angular app with four routes: Home, Books, Services, Contact.

## Run it
1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP and open this folder in VS Code.
3. In the terminal run `npm install`.
4. Run `ng serve --open` (or `npm start`).
5. Angular opens `http://localhost:4200`.

## How it matches the assignment
- Home: library introduction and navigation cards.
- Books: available book table with working search.
- Services: facilities and library rules.
- Contact: student registration demo form and contact information.
- Angular Router switches pages without reloading the whole app.

The registration form is a front-end demonstration only. It does not store student information in a database. Replace sample contact details and book data with verified college information before presenting.

## Build for hosting
Run `npm run build`. Upload the contents of `dist/first-app/browser` to a static hosting service and configure SPA fallback to `/index.html` if needed.
