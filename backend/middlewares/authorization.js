const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, "secretKey123");
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Token is not valid" });
        }
    } else {
        return res.status(401).json({ message: "Not authenticated please login" });
    }
};

const restrict = (requiredRole) => {
    return (req, res, next) => {

        if (req.user && req.user.isAdmin === requiredRole) {
            next();
        } else {
            return res.status(403).json({ message: "You don't have access" });
        }
    };
};

module.exports = { verifyToken, restrict };
