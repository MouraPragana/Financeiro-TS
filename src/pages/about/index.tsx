import { QrCodePixParams } from 'qrcode-pix'
import React from 'react'
import 'twin.macro'
import { GeraPix } from '../../utility/generatePix'

const About: React.FC = () => {
	const params: QrCodePixParams = {
		version: import.meta.env.VITE_PIX_VERSION,
		key: import.meta.env.VITE_PIX_KEY,
		name: import.meta.env.VITE_PIX_NAME,
		city: import.meta.env.VITE_PIX_CITY,
		message: import.meta.env.VITE_PIX_MESSAGE,
		value: +import.meta.env.VITE_PIX_VALUE,
	}

	return (
		<div tw="flex flex-col px-3 mx-5 py-4 w-[750px] gap-2">
			<h1 tw="md:text-2xl text-[1rem] font-bold mb-3 text-gray-900 text-justify">
				Projeto Finanças Pessoais
			</h1>
			<p tw="md:text-base text-[0.85rem] text-gray-900 text-justify indent-8">
				Este é um projeto estudo em React TS, desenvolvido somente por uma
				pessoa, que traz a proposta de proporcionar ao usuário uma visão
				abrangente de sua situação financeira.
			</p>
			<p tw="md:text-base text-[0.85rem] text-gray-900 text-justify indent-8">
				Como podemos ver de acordo com a reportagem a seguir, clicando&nbsp;
				<a
					tw="text-blue-800 font-bold hover:underline"
					href="https://www.estadao.com.br/economia/saude-financeira-brasileiros-piora-2022-febraban-npre/"
					target="_blank"
					rel="noreferrer noopener"
				>
					aqui
				</a>
				, a saúde financeira dos brasileiros piorou no início de 2022. A matéria
				ainda retrata que somente 6,8% da população tem uma vida financeira sem
				estresse, possuindo finanças que proporcionam segurança e liberdade
				financeira.
			</p>
			<p tw="md:text-base text-[0.85rem] text-gray-900 text-justify indent-8">
				O primeiro passo para a liberdade financeira é ter sua reserva de
				emergência montada. Algumas &nbsp;
				<span tw="italic font-bold">corretoras</span>&nbsp; e &nbsp;
				<span tw="italic font-bold">blogs</span> sobre finanças dizem que a
				reserva de emergência tem que ser composta de 6 meses de gasto, para
				pessoas CLTs, e de 12 meses do gasto para pessoas não CLTs.
			</p>
			<p tw="md:text-base text-[0.85rem] text-gray-900 text-justify mb-3 indent-8">
				Caso você queira saber sobre reservas de emergência, você pode clicar
				&nbsp;
				<a
					tw="text-blue-800 font-bold hover:underline"
					href="https://warren.com.br/magazine/reserva-de-emergencia/"
					target="_blank"
					rel="noreferrer noopener"
				>
					aqui
				</a>
				&nbsp; para ser redirecionado para uma matéria sobre o assunto.
			</p>
			<h2 tw="font-bold md:text-2xl text-[1rem]">Apoie-me</h2>
			<p tw="md:text-base text-gray-900 text-justify text-[0.85rem] indent-8">
				Caso você tenha gostado da iniciativa e decida me ajudar de alguma
				maneira, você pode realizar uma doação, sem pretensão alguma, com valor
				simbólico de 5 reais através do pix pelo qrcode abaixo.
			</p>
			<div tw="mx-auto mb-[5.8rem]">
				<GeraPix params={params} />
			</div>
		</div>
	)
}

export default About
