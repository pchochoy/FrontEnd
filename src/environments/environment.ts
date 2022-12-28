// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'pdchportfolio',
    appId: '1:882991306119:web:64d6095c571359878aaf22',
    storageBucket: 'pdchportfolio.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyCBqXPMkhNkFwrtbT3aQYHjkyTR1ckBvFg',
    authDomain: 'pdchportfolio.firebaseapp.com',
    messagingSenderId: '882991306119',
    measurementId: 'G-D753L37EFJ',
  },
  production: false,

  //URL: 'http://localhost:8080/'
  //URL: 'https://backendporf.herokuapp.com/'
  URL: 'https://deploy-springboot1.fly.dev/'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
