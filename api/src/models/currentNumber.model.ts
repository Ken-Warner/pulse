import { query } from "./pool.js";

export async function selectLatestNumber() {
  const selectLatestNumberQuery = {
    text: `SELECT current_number FROM number_table WHERE id = 1;`,
    params: [],
  };

  const result = await query(selectLatestNumberQuery);
  if (result.rows.length > 0) {
    const currentNumber = result.rows[0].current_number as number;
    const successfulUpdate = await insertNewNumber(currentNumber + 1);
    if (successfulUpdate) {
      return currentNumber + 1;
    }
    throw new Error("Failed to update latest number");
  }
  throw new Error("Failed to retrieve latest number");
}

async function insertNewNumber(newNumber: number) {
  const insertNumberQuery = {
    text: `UPDATE number_table SET current_number = $1 WHERE id = 1;`,
    params: [newNumber],
  };

  const result = await query(insertNumberQuery);
  return result.rowCount !== null;
}
