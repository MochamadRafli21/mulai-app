-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'prepayment', 'prepaymentConfirm', 'payment', 'completed');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "downpayment_proof" TEXT,
ADD COLUMN     "finalpayment_proof" TEXT,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "is_active" SET DEFAULT true;

-- CreateTable
CREATE TABLE "View" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "count" INTEGER NOT NULL,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);
