import React from 'react';
import {Routes ,Route} from 'react-router-dom';

import Home from './pages/home';
import Cadastro1 from './pages/cadastro_1'
import Cadastro2 from './pages/cadastro_2'
import Pacientes from './pages/lista_pacientes.js'
import PaginaI from './pages/pag_inicial.js'

export default () => {

	return(
		<Routes>
			<Route exact path="/" element={< Home/>} />
			<Route exact path="/inicial" element={<PaginaI/>} />
			<Route exact path="/cadastro1" element={< Cadastro1 />} />
			<Route exact path="/cadastro2" element={< Cadastro2/>} />
			<Route exact path="/pacientes" element={< Pacientes />} />
		</Routes>
		);
}