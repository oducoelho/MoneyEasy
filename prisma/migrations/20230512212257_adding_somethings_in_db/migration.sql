/*
  Warnings:

  - Added the required column `user_id` to the `new_expense` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_new_expense" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "new_expense_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_new_expense" ("category", "created_at", "description", "id", "price", "type") SELECT "category", "created_at", "description", "id", "price", "type" FROM "new_expense";
DROP TABLE "new_expense";
ALTER TABLE "new_new_expense" RENAME TO "new_expense";
CREATE INDEX "new_expense_user_id_idx" ON "new_expense"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
