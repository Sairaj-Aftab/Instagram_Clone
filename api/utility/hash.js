import bcrypt from "bcryptjs";

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hashSync(password, salt)
}

// Password Verify
export const verifyPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}