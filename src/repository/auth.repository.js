const User = require('../models/user');

exports.findUserByUsername = async (username, password) => {
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return null;
        }

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) {
            return null;
        }
        return user;
    } catch (error) {
        throw error;
    }
};
