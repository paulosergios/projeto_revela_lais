import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

import './novomedu.css'

function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div>
      <Sidebar className="bloco_menu">
        <main>
        <button className="botao__minimizar" onClick={() => collapseSidebar()}> <i id="seta_menu" className="fa-solid fa-angle-left"/> Minimizar menu</button>
        </main>
        <Menu className="menu__itens">
          <h4>Geral</h4>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-home'/> Home</MenuItem>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-chart-simple'/> Estatisticas</MenuItem>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-user-group'/> Pacientes</MenuItem>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-clipboard'/> Consultas</MenuItem>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-calendar'/> Agendamentos</MenuItem>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-user-pen'/> Gerenciamento de Usuários</MenuItem>
        </Menu>
        <Menu>
          <h4>Informações</h4>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-suitcase'/> Ajuda</MenuItem>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-suitcase'/> Sugestões</MenuItem>
          <MenuItem className="esp__itens"> <i className='fa fa-fw fa-suitcase'/> Termos e Condições</MenuItem>
          <div className="logo_revela">
            <img src="img/logo_revela.png" className="logo_revela" alt="logo_revela"/>
          </div>
          
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Layout