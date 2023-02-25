import React, { useState, useRef, useEffect } from 'react';
import { v4 as chave } from 'uuid';
import Contacto from './dados'

export default function App(){

  const [contacto, setContacto] = useState({nome: '', telefone: ''})
  const [listaContactos, setListaContactos] = useState([])

  const inputNome = useRef()
  const inputTelefone = useRef()

  function definirNome(event){
    setContacto({...contacto, nome: event.target.value})
  }

  function definirTelefone(event){
    setContacto({...contacto, telefone: event.target.value})
  }

  function adicionarContacto(){
    if(contacto.nome === "" || contacto.telefone === "") return

      let duplicado = listaContactos.find((ct) => ct.nome === contacto.nome && ct.telefone === contacto.telefone)
      if(typeof duplicado !== 'undefined'){
        inputTelefone.current.focus()
        return
      }

      setListaContactos([...listaContactos, contacto])

      setContacto({nome: '', telefone: ''})

      inputNome.current.focus()
  }

  function enterAdicionarContacto(event){
    if(event.code === 'Enter'){
      adicionarContacto()
    }
  }

  useEffect(() => {
    localStorage.setItem('meus_contactos', JSON.stringify(listaContactos))
  },[listaContactos])

  useEffect(()=>{
    if(localStorage.getItem('meus_contactos') !== null){
      setListaContactos(JSON.parse(localStorage.getItem('meus_contactos')))
    }
  }, [])

  return(
    
    <section className="secao__cadastro">
        <a href="/">Prontuario eletronico</a>
        <a href="/cadastro1">Cadastro de novo paciente</a>
        <input type="button" value="Voltar"/>
        <h3>Cadastro de novo paciente</h3>
        <div className="id_end_box">
            <div className="alinhar__but">
                <div className="button__1">
                    <button className="circulo">1</button>
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
        <div>
            <label for="id">ID</label>
            <label for="cpf">CPF</label>
        </div>
        <div>
            <input type="text" name="id" id="id" required/>
            <input type="number" name="cpf" id="cpf" required/>
        </div>
        <div>
            <label for="cns">CNS</label>
            <label for="naturalidade">Naturalidade</label>
        </div>
        <div>
            <input type="number" name="cns" id="cns" required/>

            <select name="naturalidade" id="naturalidade" required>
                <option value="naturalidade">Estrangeira</option>
                <option value="naturalidade">Brasileira</option>
            </select>
        </div>

            <label for="nome">Nome completo</label>
            <input type="text" ref={inputNome} onChange={definirNome} value={contacto.nome} required />
            
            <label for="social">Nome social</label>
            <input type="text" name="social"/>

            <label for="mae">Nome da mãe</label>
            <input type="text" name="mae" required/>

            <div>
              <label for="profissao">Profissão</label>
              <label for="sexo">Sexo</label>
            </div>

            <div>

            <select name="profissao" id="profissao" required>
                <option value="profissao">Policial Civil</option>
                <option value="profissao">Engenheiro</option>
            </select>

            <select name="sexo" id="sexo" required>
                <option value="sexo">Feminino</option>
                <option value="sexo">Masculino</option>
            </select>

            </div>

            <div>
              <label for="religiao">Religião</label>
              <label for="escolaridade">Escolaridade</label>
            </div>

            <div>

            <select name="religiao" id="religiao" required>
                <option value="religiao">Protestante</option>
                <option value="religiao">Católico</option>
            </select>

            <select name="escolaridade" id="escolaridade" required>
                <option value="escolaridade">Superior</option>
                <option value="escolaridade">Ensino Médio</option>
            </select>
            
            </div>

            <label for="raca">Raça</label>

            <div>

            <select name="raca" id="raca" required>
                <option value="raca">Branco</option>
                <option value="raca">Negro</option>
            </select>
            
            </div>

            <div>
                <label for="civil">Estado Civíl</label>
                <label for="nascimento">Data de nascimento</label>
            </div>

            <div>

            <select name="civil" id="civil" required>
                <option value="civil">Casado</option>
                <option value="civil">Solteiro</option>
            </select>

                <input type="number" name="nascimento" required/>
            
            </div>

            <div>
                <label for="lateiridade">Lateiridade</label>
                <label for="telefone">Telefone</label>
            </div>

            <div>

            <select name="lateiridade" id="lateiridade" required>
                <option value="lateiridade">Destro</option>
                <option value="lateiridade">Canhoto</option>
            </select>

                <input type="text" ref={inputTelefone} onChange={definirTelefone} value={contacto.telefone}  required/>
            
            </div>
            <label for="email">Email</label>
            <input type="text" name="email" id="email" required/>

            <div className="buttons">
            <input type="button" value="Voltar"/>
            <input type="button" onClick={adicionarContacto} value="Cadastrar" className="cadastrar" id="cadastrar"/>
            </div>

        </form>

          {listaContactos.map(ct=>{
        return <Contacto key={chave()} nome={ct.nome} telefone={ct.telefone} />
          })}
        </section>

    )
}