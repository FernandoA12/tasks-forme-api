import { Request, Response } from "express";

export class ExpressAdapter {
  static create(fn, status?: number) {
    return async function (request: Request, response: Response) {
      try {
        const result = await fn(
          {
            ...request.params,
            ...request.query,
          },
          request.body
        );

        if (!result) {
          response.status(status || 200).end();
          return;
        }
        response.status(status || 200).json(result);
      } catch (err) {
        console.log(err, request.originalUrl);
        response.status(400).json(err.message);
      }
    };
  }
}
