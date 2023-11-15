import { DefaultSchema } from "./defautl.interface";

export interface FetchLogSchema extends DefaultSchema {
  last_fetch?: Date;
  fetch_url?: string;
  table_name?: string;
  fetch_status?: string;
}
