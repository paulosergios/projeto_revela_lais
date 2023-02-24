import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';

import MySideNav from '../componentes/novomedu';
import Cabecalho from '../componentes/cabecalho';
import Cadastro from '../componentes/cadastro';

import './redimensionamento.css'

function Cadastro_2(){
	return(
		<div>
			<Cabecalho />
			<div className="redime">
				<ProSidebarProvider>
  				<MySideNav />
				</ProSidebarProvider>
				<Cadastro />
			</div>
		</div>
	);
}

export default Cadastro_2