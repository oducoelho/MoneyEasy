import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {/*transactions.map((transaction) => {
              return (
                <tr key={transaction.description}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighLight>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })*/}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}