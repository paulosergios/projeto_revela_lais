import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';

import MySideNav from '../componentes/novomedu';
import Cabecalho from '../componentes/cabecalho';
import Cadastro0 from '../componentes/cadastro0';

import './redimensionamento.css'

function Cadastro_1(){
	return(
		<div>
			<Cabecalho />
			<div className="redime">
				<ProSidebarProvider>
  				<MySideNav />
				</ProSidebarProvider>
				<Cadastro0 />
			</div>
		</div>
	);
}

export default Cadastro_1