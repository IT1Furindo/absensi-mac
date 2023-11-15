import { NextFunction, Request, Response } from "express";
import { IAttendanceQuery } from "../../interface/attendance.interface";
import { AttendanceService } from "../../services";

const { sequelize } = require("../../models");

export class AttendanceController {
  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, size, search, sort_by, order, name, date } = req.query;
      const limit = size ? Number(size) : 10;
      const offset = page ? (Number(page) - 1) * limit : 0;

      const sorter = sort_by || "created_at";
      const order_by = order || "DESC";

      const data = await AttendanceService.index({
        limit,
        offset,
        order: order_by,
        sort: sorter,
        search,
        date,
        name,
      } as IAttendanceQuery);

      const totalPage = Math.ceil(data?.count / limit);
      const currentPage = page ? Number(page) : 1;

      res.status(200).json({
        status: "success",
        totalItems: data?.count,
        totalPage,
        currentPage,
        data: data?.rows,
      });
    } catch (error) {
      next(error);
    }
  }
}
