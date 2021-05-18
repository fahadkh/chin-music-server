import { Request, Response } from "express";

export const errorHandler = (
  error: any,
  request: Request,
  response: Response
) => {
  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get("env") === "development" ? error : {};

  // render the error page
  response.status(error.status || 500);
  response.render("error");
};
