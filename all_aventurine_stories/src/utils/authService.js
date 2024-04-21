// authService.js
class AuthService {
    constructor() {
      this.isAuthenticated = false;
    }
  
    login(cb) {
      this.isAuthenticated = true;
      cb&&cb();
    }
  
    logout(cb) {
      this.isAuthenticated = false;
      cb&&cb();
    }
  
    getAuth() {
      return this.isAuthenticated;
    }
  }
  
  export default new AuthService();
  