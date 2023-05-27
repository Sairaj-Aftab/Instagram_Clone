import jwt from "jsonwebtoken";

export const createToken = (payload, exp) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn : exp
    })
}

// Verify Token
export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}