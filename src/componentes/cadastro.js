import {React , useEffect} from 'react';
import './cadastro.css'

import Swal from 'sweetalert2'

function Cadastro() {

    function alerta(){
        Swal.fire({
        title: 'Paciente cadastrado com sucesso',
        icon: 'success',
        showConfirmButton: true,
        showDenyButton: true,
        denyButtonColor: '#32CD32',
        confirmButtonColor: '#32CD32',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/pacientes';
            } else if (result.isDenied) {
        }
        })
}
  
    return (
    	<section className="secao__cadastro">
        <a href="/">Prontuario eletronico</a>
        <a href="/cadastro1">Cadastro de novo paciente</a>
        <input type="button" value="Voltar"/>
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

        <h3>Endereço do Paciente</h3>
        <div className="label__form">
            <label for="cep">CEP</label>
            <label for="uf">UF</label>
        </div>
        <div className="input__form">
            <input type="number" name="cep" id="cep"/>
            
            <select name="uf" id="uf">
                <option value="uf">Rio Grande do Norte</option>
                <option value="uf">Pernambuco</option>
            </select>
        </div>
        <div className="label__form">
            <label for="bairro">Bairro</label>
            <label for="cidade">Cidade</label>
        </div>
        <div className="input__form">
            <input type="text" name="bairro" id="bairro"/>

            <select name="cidade" id="cidade">
                <option value="cidade">Natal</option>
                <option value="cidade">Mossoró</option>
                <option value="cidade">Recife</option>
                <option value="cidade">Caruaru</option>
            </select>
        </div>

            <label for="logradouro">Logradouro</label>
            <input type="text" name="logradouro" id="logradouro"/>
            <div className="label__form">
            <label for="numero">Número</label>
            <label for="complemento">Complemento</label>
            </div>

            <div className="input__form">
            <input type="text" name="numero" id="numero"/>
            <input type="text" name="complemento" id="complemento"/>
            </div>

            <div className="buttons">
            <input type="button" value="Voltar"/>
            <input type="button" onClick={alerta} value="Cadastrar" className="cadastrar" id="cadastrar"/>
            </div>

        </form>
        </section>
    )
}

export default Cadastro