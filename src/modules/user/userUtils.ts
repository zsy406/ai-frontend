export const validateUser = (user) => {
    const { username, email, password } = user;
    const errors = {};

    if (!username || username.length < 3) {
        errors.username = "Username must be at least 3 characters long.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        errors.email = "Invalid email address.";
    }

    if (!password || password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const formatUserData = (user) => {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString(),
    };
};