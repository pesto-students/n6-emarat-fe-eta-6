<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://res.cloudinary.com/emarat/image/upload/v1630505506/logo.svg" alt="Logo" width="120" >
</p>

<h1 align="center">Emarat Frontend</h1>
<h3 align="center">
	<a href="https://e-marat.netlify.app/">Live URL</a>
</h3>
  
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#artefacts">Artefacts</a></li>
        <li><a href="#backend-repo">Backend Repo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#test-credentials">Test Credentials</a></li>
        <li><a href="#other-available-scripts">Other Available Scripts</a></li>
        <li><a href="#tools-and-libraries">Tools And Libraries</a></li>
      </ul>
    </li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://e-marat.netlify.app/)

Most Resident Welfare Association (RWAs) and cooperative societies rely on physical methods
to solve resident problems and to collect maintenance fees which is quite a tedious task and
lacks clarity and status tracking. With E-Marat, we are providing digital solutions for all the
society issues at one place. This will include payments tracking, complaints resolving, and
public announcements system. We will also provide a Social space platform for residents to
become acquainted with others by posting stories and sharing their thoughts.

### Artefacts

<a href="https://drive.google.com/file/d/1GeWlJTQ7-VaQLpc-Se31_dH8Kf1n8kUa/view?usp=sharing">PRD</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://drive.google.com/file/d/1wfXcbGgDDSTDIMjHo2rQlWlYX2FSgtwj/view?usp=sharing">HLD</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://drive.google.com/file/d/1YabDlAU6MeRzFvw3qotHrL2CxlqkCiEA/view?usp=sharing">One Pager</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://drive.google.com/file/d/1VhLwtQEiYDabaPfq7dHEWbr2DseD71Ce/view?usp=sharing">Wireframes</a>

### Backend Repo

[Backend Repo](https://github.com/pesto-students/n6-emarat-be-eta-6/)

**Mission:**

To empower cooperative society digitally by providing a platform to avail facilities easily and to connect.

**Vision:**

To make all the members of a society feel like a family and to resolve all the problems at one place.

**Goals:**

-  Simple solutions for the problems.
- All solutions are in one place.
- Bridge the communication gap within the society.

**Features:**

- Social Feed with realtime comments.
- Simple and consistent UI.
- Secure app with mobile Otp and JWT Token.
- Multiple Payment Option.
- Infinite scrolling to optimize long lists.

### Built With

<p align="center">
	<a href="https://www.typescriptlang.org/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867519/typescript-logo_z0knsm.png" title="Typescript" height="100">
	</a>
	<a href="https://reactjs.org/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867520/react-logo_aiqchy.png" title="React" height="100">
	</a>
	<a href="https://redux.js.org/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867520/redux-logo_g2vd7e.png" title="Redux" height="100">
	</a>
	<a href="https://firebase.google.com/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631803785/firebase-logo_v8dzdj.png" title="Firebase" height="100">
	</a>
	<a href="https://github.com/features/actions">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867519/github-action-logo_yamrxz.png" title="Github Action" height="100">
	</a>
	&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://razorpay.com/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631811211/Razorpay-logo_bzojzt.png" title="Razorpay Payment Gateway" height="100">
	</a>
	<a href="https://www.netlify.com/">
		<img src="https://res.cloudinary.com/emarat/image/upload/h_150/v1631867519/netlify-logo_i6ye1g.png" title="Netlify" height="100">
	</a>
</p>

<!-- GETTING STARTED -->

## Getting Started

Following are the simple steps to run this project.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

- firebase
  ```sh
  npm install firebase -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pesto-students/n6-emarat-fe-eta-6.git emarat-fe
   ```
2. Set environment variables

    REACT_APP_PROXY=https://e-marat.herokuapp.com  
    REACT_APP_FIREBASE_API_KEY=  
    REACT_APP_FIREBASE_AUTH_DOMAIN=  
    REACT_APP_FIREBASE_DATABASE_URL=  
    REACT_APP_FIREBASE_PROJECT_ID=  
    REACT_APP_FIREBASE_STORAGE_BUCKET=  
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=  
    REACT_APP_FIREBASE_APP_ID=  
    REACT_APP_FIREBASE_MEASUREMENT_ID=  
    REACT_APP_RAZORPAY_KEY_ID=  
    REACT_APP_SENTRY_DSN=  
    COUNTRY_CODE=+91  

3. Install NPM packages
   ```sh
   cd emarat-fe && npm install
   ```
4. Run
   ```sh
   npm start
   ```
5. Open http://localhost:3000 to view it in the browser

6. Run Test cases
   ```sh
   npm test
   ```

## Test Credentials

*To login in the app as admin use no. 9999999999 and otp 123456*  
*To login in the app as resident use no. 8888888888 and otp 123456*  

## Other Available Scripts

**Linting**  
To lint our entire project expect build folder, we can run  
```sh
npm run lint
```   
we don't need to run the above commoand for every change in our file, VS code will automatically tell the places where ESLint rules are getting broke, thanks to `.eslintrc.js` which conatins all the standard rules for our project.  

**Pretty code**  
To make our coding practices standard with all our team members, we are using Prettier  
```sh
npm run format
```

**Pre-commit hook**  
In this project we are using `husky` to hook particular scripts to pre commit hook,  
whenever we do `git commit -m 'message'` husky will call the `pre-commit` hook, from the hook we will call our scripts in the order of  
```sh
npm run lint
```
```sh
npm run format
``` 
if anyone of this script gets failed our commit will not happen, so this will give standard structure to our code base.  

**End-To-End Test**  
To do end to end testing, we are using cypress.  
Whenever we do `npm run cypress` cypress window will open and we can run any test suite that is written.  
We can also use `npm run cypress:headless` to run all the end to end test suits at once.  

<!--Tools-->

## Tools and Libraries 

- [Redux-Tool-Kit] - State Management
- [Sentry] - Error Tracking
- [Cypress] - End to End testing
- [Jest] - Unit testing
- [React-testing-Library] - Integration testing
- [Recharts] - Charts
- [Eslint] - Linting
- [Prettier] - Automatic code formatting
- [Tailwind] - CSS styling classes
- [StyledComponents] - Styling

<!-- Contributors -->

## Contributors

Deepak Singh Rawat - [GiHub](https://github.com/dev-deepak-rawat) - [Email](mailto:dev.deepak.rawat@gmail.com)

Haris Rahman - [GiHub](https://github.com/harisrahman) - [Email](mailto:hi@haris.tech)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://res.cloudinary.com/emarat/image/upload/v1631802213/homepage-screenshot_n2dxwk.png
