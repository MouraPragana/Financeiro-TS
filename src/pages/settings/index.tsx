import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { format, isValid } from 'date-fns'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import 'twin.macro'
import * as z from 'zod'

const Settings: React.FC = () => {
	const [dataLancamento, setDataLancamento] = useState<Date>(new Date())
	const dataDeLancamentoValida = isValid(dataLancamento)
	const dataDeLancamentoString = format(dataLancamento, 'dd/MM/yyyy')

	const schema = z.object({
		descricaoGasto: z.string().min(1, { message: 'Required' }),
	})

	interface IForm {
		descricaoGasto: string
	}

	const { register, handleSubmit } = useForm<IForm>({
		resolver: zodResolver(schema),
	})

	const onSubmit = (data: IForm) => {
		if (dataDeLancamentoValida) {
			console.log(data)
			console.log(dataDeLancamentoString)
		}
	}

	return (
		<div tw="flex flex-col px-3 mx-5 py-4 w-[750px] gap-2">
			<h1 tw="md:text-2xl text-[1rem] font-bold mb-3 text-gray-900 text-justify">
				Configurações
			</h1>
			<p tw="md:text-base text-[0.85rem] text-gray-900 text-justify indent-8">
				Aqui você fará o cadastro de suas informações financeiras, como gastos e
				ganhos, podendo classificar os lançamentos.
			</p>
			<form
				tw="flex flex-col px-4 py-3 bg-blue-500 h-full w-full"
				onSubmit={handleSubmit(onSubmit)}
			>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DesktopDatePicker
						label="Data da despessa"
						inputFormat="dd/MM/yyyy"
						value={dataLancamento}
						onChange={(newValue) => {
							newValue && setDataLancamento(newValue)
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<TextField
					id="outlined-basic"
					label="Descrição do Gasto"
					variant="outlined"
					{...register('descricaoGasto')}
				/>
				<button type="submit">Inserir</button>
			</form>
		</div>
	)
}

export default Settings
