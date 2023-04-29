import { TransactionsProvider } from "@/contexts/TransactionsContext";
import { Transactions } from "./transactions";

export default function Home() {
  return (
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  )
}
