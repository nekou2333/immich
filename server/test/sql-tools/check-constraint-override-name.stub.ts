import { Check, Column, ConstraintType, DatabaseSchema, Table } from 'src/sql-tools';

@Table()
@Check({ name: 'CHK_test', expression: '1=1' })
export class Table1 {
  @Column({ type: 'uuid' })
  id!: string;
}

export const description = 'should create a check constraint with a specific name';
export const schema: DatabaseSchema = {
  databaseName: 'postgres',
  schemaName: 'public',
  functions: [],
  enums: [],
  extensions: [],
  parameters: [],
  overrides: [],
  tables: [
    {
      name: 'table1',
      columns: [
        {
          name: 'id',
          tableName: 'table1',
          type: 'uuid',
          nullable: false,
          isArray: false,
          primary: false,
          synchronize: true,
        },
      ],
      indexes: [],
      triggers: [],
      constraints: [
        {
          type: ConstraintType.CHECK,
          name: 'CHK_test',
          tableName: 'table1',
          expression: '1=1',
          synchronize: true,
        },
      ],
      synchronize: true,
    },
  ],
  warnings: [],
};
