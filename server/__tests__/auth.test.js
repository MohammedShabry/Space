const { registerUser , loginUser, logoutUser, getProfile } = require('../controllers/authController');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../helpers/auth');

jest.mock('../models/user');

const req = {
    body: {
        name: 'shabry',
        email: 'shabry967@gmail.com',
        password: '123456778'
    },
    cookies: {} // Mocked cookies object
};

const res = {
    json: jest.fn(), // Mocking the response's json method
    cookie: jest.fn(), // Mocking the response's cookie method
    clearCookie: jest.fn() // Mocking the response's clearCookie method
};

describe('Authentication Tests', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock function calls after each test
    });

    it('should send a status code of 400 when user exists', async () => {
        User.findOne.mockResolvedValueOnce({
            id: 1,
            name: 'shabry',
            email: 'shabry967@gmail.com',
            password: '123456778'
        });

        await registerUser(req, res);

        expect(res.json).toHaveBeenCalledWith({
            error: 'Email is taken already'
        });
    });

    it('should successfully register a new user', async () => {
        User.findOne.mockResolvedValueOnce(null);
        User.create.mockResolvedValueOnce({
            id: 1,
            name: 'shabry',
            email: 'shabry967@gmail.com',
            password: 'hashedPassword'
        });

        await registerUser(req, res);

        expect(res.json).toHaveBeenCalledWith({
            id: 1,
            name: 'shabry',
            email: 'shabry967@gmail.com',
            password: 'hashedPassword'
        });
    });
    

    it('should send a status code of 400 when logging in with incorrect credentials', async () => {
        User.findOne.mockResolvedValueOnce({
            id: 1,
            name: 'shabry',
            email: 'shabry967@gmail.com',
            password: 'hashedPassword'
        });

        const comparePassword = jest.fn().mockResolvedValueOnce(false);

        await loginUser(req, res);

        expect(res.json).toHaveBeenCalledWith({
            error: 'password do not match'
        });
    });

    it('should send a status code of 400 when user is not found during login', async () => {
        User.findOne.mockResolvedValueOnce(null);

        await loginUser(req, res);

        expect(res.json).toHaveBeenCalledWith({
            error: 'No user found'
        });
    });

    
});
