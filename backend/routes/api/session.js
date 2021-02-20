const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Cart, CartItems } = require("../../db/models");

const router = express.Router();

const validateLogin = [
  check("email")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid email."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

// Log in
router.post(
  '/',
  validateLogin,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.login({ email, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    const cart = await Cart.findOne({
      where: {
        userId: user.id
      },
      order: [['createdAt', 'DESC']],
    })

    await setTokenCookie(res, user);

    return res.json({
      user,
      cartId: cart.id,
    });
  }),
);

// Log out
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

// Restore session user
router.get(
  '/',
  restoreUser,
  asyncHandler(async(req, res, next) => {
    const { user } = req;




    // const cart = await Cart.findOrCreate({
    //   order: [['createdAt', 'DESC']],
    //   where: {
    //     userId: user.id
    //   }
    // })

    if (user) {

      const cart = await Cart.findOne({
        order: [['createdAt', 'DESC']],
        where:{
          userId: user.id
        }
      })


      return res.json({
        user: user.toSafeObject(),
        cartId: cart.id,
      });
    } else return res.json({});
  }
));

module.exports = router;
