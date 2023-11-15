import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { AttendanceService } from "../../services/absensi/attendance.service";
import { FetchLogService } from "../../services/absensi/fetchLog.service";
const { sequelize } = require("../../models");
const SERVER_URL = process.env.SERVER_URL || "http://10.211.55.3:3000";

export class MonitorController {
  static async index(req: Request, res: Response, next: NextFunction) {
    const transaction = await sequelize.transaction();
    try {
      const now = new Date();
      const latestFetch = await FetchLogService.latest();

      let last_fetch = latestFetch
        ? new Date(latestFetch.last_fetch).valueOf()
        : undefined;

      const url = new URL(`${SERVER_URL}/fetch`);
      const params = url.searchParams;
      if (last_fetch) {
        params.append("last_fetch", `${last_fetch}`);
      }
      const { data } = await axios.get(url.toString(), {});

      await FetchLogService.create(
        {
          last_fetch: now,
          fetch_url: url.toString(),
          table_name: "CHECKINOUT",
          fetch_status: "success",
        },
        transaction
      );
      await AttendanceService.attendanceBulkCreate(data, transaction);

      await transaction.commit();

      res.status(200).json({
        status: "success",
        message: "Data fetched successfully!",
        data: last_fetch,
        absensi: data,
      });
    } catch (error: any) {
      await transaction.rollback();
      console.log(error?.response?.data?.message || error.message, "error64");
      next(error);
    }
  }

  static async getEmployees(req: Request, res: Response, next: NextFunction) {
    try {
      const url = `${SERVER_URL}/employee`;
      const { data } = await axios.get(url);
      res.status(200).json({
        status: "success",
        message: "Employee fetched successfully!",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}
