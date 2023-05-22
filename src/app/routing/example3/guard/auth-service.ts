export class AuthService {

    loggedIn = true;

    isAuthenticated() {
        return this.loggedIn;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}