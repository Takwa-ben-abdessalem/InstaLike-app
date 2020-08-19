// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // 2. Add your credentials from step 1
  production: false,
  firebase: {
    apiKey: "AIzaSyC9-hGb4-HofU1kJj3bkcvnoymfUtbMzgw",
    authDomain: "instagram-like-portol-app.firebaseapp.com",
    databaseURL: "https://instagram-like-portol-app.firebaseio.com",
    projectId: "instagram-like-portol-app",
    storageBucket: "instagram-like-portol-app.appspot.com",
    messagingSenderId: "987246632721",
    appId: "1:987246632721:web:707c9a2afecdf7151ab6b0",
    measurementId: "G-2ZNYZ5JR7D"
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