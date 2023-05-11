import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  Button,
  CloseButton,
  Content,
  Overlay,
  Title,
  TransactionType,
  TransactionTypeButton,
} from './styled'
import { api } from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'
import { FormEvent, useState } from 'react'

export const NewTransactionModal = () => {
  const [description, setDescription ] = useState("")
  const [category, setCategory ] = useState("")
  const [price, setPrice ] = useState("")


  const { mutateAsync: handleSpend } = useMutation(async () => {
    await api.post('/newExpense/expense', {
      description,
      category,
      price,
    })
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await handleSpend()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Nova Transação</Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Descrição"
            required
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <input
            type="text"
            placeholder="Preço"
            required
            value={price}
            onChange={({ target }) => setPrice(target.value)}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            value={category}
            onChange={({ target }) => setCategory(target.value)}
          />

          {/*<Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton value="income">
                    <ArrowCircleUp size={24}/>
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />*/}

          <Button type="submit">
            Cadastrar
          </Button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}