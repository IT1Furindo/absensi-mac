import { NextFunction, Request, Response } from "express";
import { FetchLogService } from "../../services";
const { sequelize } = require("../../models");

export class FetchLogController {
  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({ message: "Hello World!" });
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    const transaction = await sequelize.transaction();
    try {
      const { last_fetch, fetch_url, table_name, fetch_status } = req.body;
      const data = await FetchLogService.create(
        {
          last_fetch,
          fetch_url,
          table_name,
          fetch_status,
        },
        transaction
      );

      await transaction.commit();

      res
        .status(201)
        .json({ status: "success", message: "Data created!", data });
    } catch (error) {
      await transaction.rollback();
      console.log(error);
      next(error);
    }
  }
}
