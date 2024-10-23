/*
  Warnings:

  - Made the column `refresh_token` on table `Account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `access_token` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Account` MODIFY `refresh_token` TEXT NOT NULL,
    MODIFY `access_token` TEXT NOT NULL;
