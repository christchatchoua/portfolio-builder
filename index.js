const express = require('express')
const morgan = require ('morgan')
const userRouter = require('./routes/user.route');
const session = require('express-session');
const dashboardRouter = require('./routes/dashboard.route');
const flash = require('connect-flash');
const { verifyUser } = require('./libs/middleware');

require('dotenv').config();
require('./libs/dbConnect');
