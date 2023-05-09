/*
  Warnings:

  - You are about to drop the column `name` on the `new_spend` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `new_spend` table. All the data in the column will be lost.
  - Added the required column `category` to the `new_spend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `new_spend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `new_spend` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_new_spend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_new_spend" ("created_at", "id", "type") SELECT "created_at", "id", "type" FROM "new_spend";
DROP TABLE "new_spend";
ALTER TABLE "new_new_spend" RENAME TO "new_spend";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
