# React Keycloak Template (WIP)
A demo project serving as a starter project with React and Keycloak. 

You may import the `KeycloakService` file anywhere in the application. It manages the state of the authentication outside of Redux and Context.


### Credentials
Use Keycloak Admin panel to get the Installation details in JSON format. Create a `keycloak.json` file in the public folder with the content from the Installation tab.

## Available functions:
The following functions have been added to the KeycloakService

### `initKeycloak(onSuccess): void`
Initialise keycloak using the `keycloak.json` file that should be stored in the public folder.
### `doLogin(): void`
Use the default Keycloak login page to authenticate a user.

### `doLogout(): void`
Clear the current logged in session and reload the application.

### `getToken(): string`
Get the current authentication token for the logged in session.

### `isLoggedIn(): boolean`
Check if the user is successfully logged in.
### `updateToken(onSuccess)`
Update the authentication token.
### `getUsername(): string`
Get the username of the currently logged in user.
### `hasRole(roles: string[]): boolean`
A function that accepts an array of strings and returns a boolean if one of the roles have been found on the current session.

---

## Special thanks:
A special thank you to Niko Köbler for his tutorial on React with keycloak
### Source code:
[https://github.com/dasniko/keycloak-reactjs-demo](https://github.com/dasniko/keycloak-reactjs-demo)
