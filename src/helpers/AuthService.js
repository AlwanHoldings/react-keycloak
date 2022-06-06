import Keycloak from "keycloak-js";
const _kc =  Keycloak({
    url: 'http://localhost:8080/auth/',
    realm: 'monty-realm',
    clientId: 'monty-client-local',
  });
  const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
        
    }).then(authenticated => {
    }
    )
  };

  const isLogedIn = ()=>{
      return _kc.idToken
  }
  const doLogin = _kc.login;
  const doLogout = _kc.logout;
  export {doLogin,isLogedIn,doLogout,_kc,initKeycloak}