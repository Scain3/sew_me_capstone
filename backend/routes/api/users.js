const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');


const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Cart } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('firstName')
    .exists({checkFalsy: true})
    .withMessage('Please provide a valid first name.'),
  check('lastName')
    .exists({checkFalsy: true})
    .withMessage('Please provide a valid last name.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    const user = await User.signup({ firstName, lastName, username, email, password });

    const cart = await Cart.create({
      userId: user.id
    }
    )

    await setTokenCookie(res, user);

    res.json({
      user,
      cartId: cart.id
    });
  })
);

module.exports = router;
