import React, { useState, useEffect } from 'react'
import { QrCodePix, QrCodePixParams } from 'qrcode-pix'

export function GeraPix({ params }: { params: QrCodePixParams }) {
	const [base64, setbase64] = useState('')

	useEffect(() => {
		const qrCodePix = QrCodePix(params)
		qrCodePix.base64().then(setbase64)
	}, [params])

	return (
		<div>
			{base64 ? <img src={base64} alt="pix qr" /> : <div>pix-inválido</div>}
		</div>
	)
}
