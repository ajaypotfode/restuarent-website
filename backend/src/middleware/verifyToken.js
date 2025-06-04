import jwt from 'jsonwebtoken'

const tokenMiddleware = async (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)

        // this is useFull to get user information in anywhere which is having middleware 
        req.user = user

        next()
    } catch (error) {
        return res.status(403).json({ message: 'invalid Token', error });
    }

}

export default tokenMiddleware