//json web token
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.secretkey;

const checkrecentlogin = (req, res, next) => {
    // Implement your logic to check if the user has recently logged in
    // For example, check the presence of a valid token in the request headers
  
    const authToken = req.header('auth-token');
    
    if (authToken) {
        try {
            // Verify and decode the token
            const decodedToken = jwt.verify(authToken, JWT_SECRET);
            console.log(authToken)
        // Assume that if the token is valid, the user has recently logged in
        req.app.render(req, res, '/home');   ///ERRORRR
        return;
        // return res.redirect('/home');
      } catch (error) {
        // Token verification failed, continue with the normal flow
        console.error(error);
      }
    }
  
    // If the user hasn't recently logged in, continue with the next middleware or route handler
    next();
  };

  module.exports = checkrecentlogin;