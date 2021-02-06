const express = require('express');
const router = express.Router();
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const { TailorMade, Fabric, Pattern  } = require('../../db/models');
