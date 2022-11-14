import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layout/defaultLayout'
import About from './pages/about'

const Router: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<>Home</>} />
				<Route path="/admin" element={<>Configuração</>} />
				<Route path="/about" element={<About />} />
			</Route>
		</Routes>
	)
}

export default Router
