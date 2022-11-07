const baseUrl = process.env.NODE_ENV === "production"
? "https://mernku.herokuapp.com"
: "http://localhost:4000";
export default baseUrl;