export interface DefaultSchema {
  id?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface DefaultQuery {
  limit: number;
  offset: number;
  order: string;
  sort: string;
  search?: string;
}
