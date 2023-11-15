const { Attendance } = require("../../models");
import { Op, Transaction } from "sequelize";
import { IAttendanceQuery } from "../../interface/attendance.interface";

export class AttendanceService {
  static async attendanceBulkCreate(payload: any[], transaction: Transaction) {
    return await Attendance.bulkCreate(payload, { transaction });
  }

  static async index({
    limit,
    offset,
    order,
    sort,
    search,
    date,
    name,
  }: IAttendanceQuery) {
    const whereOptions: any = {
      [Op.and]: [],
    };

    if (search) {
      whereOptions[Op.or] = [
        {
          name: {
            [Op.like]: `%${search.replace(/\s+/g, "")}%`,
          },
        },
        {
          CHECKTIME: {
            [Op.like]: `%${search.replace(/\s+/g, "")}%`,
          },
        },
        {
          CHECKTYPE: {
            [Op.like]: `%${search.replace(/\s+/g, "")}%`,
          },
        },
      ];
    }

    if (date) {
      whereOptions[Op.and].push({
        CHECKTIME: {
          date: {
            [Op.like]: `%${date}%`,
          },
        },
      });
    }

    if (name) {
      whereOptions[Op.and].push({
        name: {
          [Op.like]: `%${name}%`,
        },
      });
    }

    console.log(JSON.stringify(whereOptions), "WHERE OPTIONS");

    return await Attendance.findAndCountAll({
      where: whereOptions,
      limit,
      offset,
      order: [[sort, order]],
    });
  }
}
