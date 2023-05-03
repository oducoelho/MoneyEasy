import { TransactionsProvider } from "@/contexts/TransactionsContext";
import { Transactions } from "./transactions/index.page";

export default function Home() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  )
}
