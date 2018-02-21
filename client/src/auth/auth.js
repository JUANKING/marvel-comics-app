class auth {  
    static isAthenticate() {
        return sessionStorage.getItem('jwt')!=null;
    }

    static getToken() {
        return sessionStorage.getItem('jwt');
    }

    static setToken(token) {
        sessionStorage.setItem('jwt', token);
    }
  }
  
  export default auth;  