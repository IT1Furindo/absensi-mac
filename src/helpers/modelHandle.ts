export class ModelHandle {
  static notNull(field: string) {
    return {
      allowNull: false,
      validate: {
        notNull: {
          msg: `${field} is required.`,
        },
        notEmpty: {
          msg: `${field} cannot be empty.`,
        },
      },
    };
  }

  static paranoidFunction(modelName: string, tableName: string) {
    return {
      modelName,
      tableName,
      paranoid: true,
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    };
  }
}
