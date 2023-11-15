### Create New Table Fetching Data from server

```bash
sequelize model:create --name fetch_log --attributes last_fetch:date,fetch_url:string,table_name:string,fetch_status:string,
```

### Create Table for store data from server

```bash
sequelize model:create --name attendance --attributes employee_name:string,employee:id,check_time:date,check_type:enum,work_code:string
```
# absensi-mac
