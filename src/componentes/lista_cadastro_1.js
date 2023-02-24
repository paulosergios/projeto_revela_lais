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
    <>
      <h1>Minha lista de contactos</h1>
      <hr/>
      <div>
        <label>Nome:</label>
        <input type="text" ref={inputNome} onChange={definirNome} value={contacto.nome} />
      </div>
      <div>
        <label>Telefone:</label>
        <input type="text" ref={inputTelefone} onChange={definirTelefone} value={contacto.telefone} />
      </div>
      <button onClick={adicionarContacto}>Add contacto</button>
      <hr/>

      {listaContactos.map(ct=>{
        return <Contacto key={chave()} nome={ct.nome} telefone={ct.telefone} />
      })}
    </> 
    )
}