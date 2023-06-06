import jwt from "jsonwebtoken";

const isAdminAuthorized = (req, res, next) => {
    const token = req.headers.authorization.split("").splice(7).join('');
    console.log(token);


    if (!token) {
        return res.send("No token found ")
    }
    jwt.verify(token, "Ajay", (err, decoded) => {
        if (err) {
            console.log(err);
            return null;
        }
        console.log(decoded);
        if (decoded.role == "admin") {
            next();
        }
        if (decoded.role !== "admin") {
            return res.send("Not Authorized to perform the action ")
        }
    })


}

export default isAdminAuthorized;