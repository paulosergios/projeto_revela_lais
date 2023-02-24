import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';

import MySideNav from '../componentes/novomedu';
import Cabecalho from '../componentes/cabecalho';
import Lista from '../componentes/lista_cadastro_1'

import './redimensionamento.css'

function Lista_pacientes(){
	return(
		<div>
			<Cabecalho />
			<div className="redime">
				<ProSidebarProvider>
  				<MySideNav />
				</ProSidebarProvider>
			</div>
			<Lista />
		</div>
	);
}

export default Lista_pacientes