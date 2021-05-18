import express from "express";
import logger from "morgan";
import createError from "http-errors";

import indexRouter from "./routes/index";
import { errorHandler } from "./util/errors";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

module.exports = app;
