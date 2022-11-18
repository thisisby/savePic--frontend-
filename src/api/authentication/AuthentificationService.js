class AuthentificationService {
    registerSuccessfulLoginAdmin(username) {
        sessionStorage.setItem("authenticatedUser", username);
        sessionStorage.setItem("role", "ADMIN");
        console.log("Successful login");
    }

    registerSuccessfulLoginClient(username) {
        sessionStorage.setItem("authenticatedUser", username);
        sessionStorage.setItem("role", "CLIENT");
        console.log("Successful login");
    }

    logout() {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload(false);
    }

    isClientLogedIn() {
        let role = sessionStorage.getItem("role");

        if (role !== "CLIENT") {
            return false;
        }
        else{
            return true;
        }
    }

    isAdminLogedIn() {
        let role = sessionStorage.getItem("role");

        if (role !== "ADMIN") {
            return false;
        }
        else{
            return true;
        }
    }

    getLoggedInUser() {
        let username = sessionStorage.getItem("authenticatedUser");

        if (username == null) {
            return "";
        } else{
            return username
        }
    }

    setUpToken(jwtToken) {
        localStorage.setItem("token", jwtToken);
    }
}

export default new AuthentificationService;