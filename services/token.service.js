// TokenService provides get, set, remove methods to work with Token and User Data stored on Browser.

class TokenService {
    setAccessToken(token) {
        window.localStorage.setItem("token", token);
    }

    getAccessToken() {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            if (token) {
                return token;
            }
        }
    }

    updateAccessToken(token) {
        let user = JSON.parse(localStorage.getItem("token"));
        user = token;
        localStorage.setItem("token", JSON.stringify(user));
    }

    removeToken() {
        localStorage.removeItem("token");
    }
}

export default new TokenService();
