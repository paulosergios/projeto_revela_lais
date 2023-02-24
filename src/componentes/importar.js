import './lista_cadastro_1.js'

function importar(){
	return(
		<div className="principal">
            <div className="mochila"></div>
            <form action="" class="adicionar" id="novoItem">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome"/>
                <label for="quantidade">Quantidade</label>
                <input type="number" name="quantidade" id="quantidade"/>
                <input type="submit" value="Adicionar" className="cadastrar" id="cadastrar"/>
            </form>
        </div>
        
	);
}

export default importar