import { Transaction } from "sequelize";
import { FetchLogSchema } from "../../interface/fetchLog.interface";

const { FetchLog } = require("../../models");

export class FetchLogService {
  static async index() {
    return await FetchLog.findAll();
  }

  static async create(params: FetchLogSchema, transaction: Transaction) {
    return await FetchLog.create(params, { transaction });
  }

  static async latest() {
    return await FetchLog.findOne({ order: [["created_at", "DESC"]] });
  }

  static async detail(id: string) {
    return await FetchLog.findByPk(id);
  }
}
