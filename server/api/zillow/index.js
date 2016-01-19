'use strict';

var express = require('express');
var controller = require('./zillow.controller');
var cors = require('cors');

var router = express.Router();

router.get('/', cors(), controller.index);

module.exports = router;
