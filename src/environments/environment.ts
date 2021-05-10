// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://trello-project-alcohol.herokuapp.com/',
  firebaseConfig : {
    apiKey: 'AIzaSyDb8Fn1YnMY6F24h7zmUinPbiGQGv5Texc',
    authDomain: 'trello-project-firebase.firebaseapp.com',
    databaseURL: 'https://trello-project-firebase-default-rtdb.firebaseio.com',
    projectId: 'trello-project-firebase',
    storageBucket: 'trello-project-firebase.appspot.com',
    messagingSenderId: '910489130302',
    appId: '1:910489130302:web:2c7619c853656c2291886f',
    measurementId: 'G-LEKLLZQ4KR'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
