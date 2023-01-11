class Auth {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000/api/auth' 
    }
    async registerUser(userObj) {
        try {
            const response = await fetch(`${this.baseUrl}/signup`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userObj)
            })
            const { data, message, status, error = undefined } = await response.json();
            if (status === 'success') {
                return { data, message };
            } else {
                throw Error(error.message);
            }
        } catch (err) {
            throw Error(err.message)
        }
    }
}


export default new Auth();