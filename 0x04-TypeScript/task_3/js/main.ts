/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Abdullah",
  lastName: "suleiman",
};

const newRowID: RowID = CRUD.insertRow(row);
const UpdatedRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, UpdatedRow);
CRUD.deleteRow(newRowID);
