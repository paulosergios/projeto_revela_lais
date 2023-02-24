import {React , useEffect} from 'react';
import './cadastro.css'

import Swal from 'sweetalert2'

function Cadastro() {

    function alerta(){
        Swal.fire({
        title: 'Paciente cadastrado com sucesso',
        icon: 'success',
        showDenyButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
            } else if (result.isDenied) {
        }
        })
}
  
    return (
    	<section className="secao__cadastro">

        <h3>Cadastro de novo paciente</h3>
        <div className="id_end_box">
            <div className="alinhar__but">
                <div className="button__1">
                    <i className="fa-solid fa-circle-check"></i>
                    <button className="circulo">2</button>
                </div>
                <div className="id_end">
                    <h4>Identificação</h4>
                    <h4>Endereço</h4>
                </div>
            </div>
        </div>

        <form className="bloco__endereco">
            <label for="cep">CEP</label>
            <input type="text" name="cep" id="cep"/>

            <label for="uf">UF</label>
            <select name="uf" id="uf">
                <option value="uf">Rio Grande do Norte</option>
                <option value="uf">Pernambuco</option>
            </select>

            <label for="cidade">Cidade</label>
            <select name="cidade" id="cidade">
                <option value="cidade">Natal</option>
                <option value="cidade">Mossoró</option>
                <option value="cidade">Recife</option>
                <option value="cidade">Caruaru</option>
            </select>

            <label for="logradouro">Logradouro</label>
            <input type="text" name="logradouro" id="logradouro"/>

            <label for="numero">Número</label>
            <input type="text" name="numero" id="numero"/>

            <label for="complemento">Complemento</label>
            <input type="text" name="complemento" id="complemento"/>

            <input type="button" onClick={alerta} value="ola"/>
            <input type="submit" value="Cadastrar" className="cadastrar" id="cadastrar"/>

        </form>
        </section>
    )
}

export default Cadastro