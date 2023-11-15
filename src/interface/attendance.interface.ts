import { DefaultQuery } from "./defautl.interface";

export interface IAttendanceQuery extends DefaultQuery {
  date?: Date;
  name?: string;
}
