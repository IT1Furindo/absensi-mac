import { Request, Response } from "express";
import { instance } from "../../api/instance";

export class EmployeeController {
  static async getEmployees(req: Request, res: Response) {
    try {
      const { data } = await instance({
        method: "GET",
        url: "/employees",
      });

      res.status(200).json({
        message: "Success get employees",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error get employees",
        error: error,
      });
    }
  }

  static async getDetailEmployee(req: Request, res: Response) {
    try {
      const { data } = await instance({
        method: "GET",
        url: `/employees/${req.params.id}`,
      });

      res.status(200).json({
        message: "Success get detail employee",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error get detail employee",
        error: error,
      });
    }
  }
}
