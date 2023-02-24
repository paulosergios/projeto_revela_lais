import './botao_sabia.css'

function Botao() {
  return (
    <section className="section__sabia">
      <div>
        <p>Login do usuário</p>
        <div className="botao__sabia">
          <button className="button__entrar"> <img src="./img/sabia.png" alt="sabia"/> Entrar com o Sabiá</button>
          <button className="button__criar"> <img src="./img/sabia.png" alt="sabia"/> Criar conta no Sabiá</button>
        </div>
        <a className="saiba__mais" href="/"> <i className="fa-solid fa-triangle-exclamation"></i> Saiba mais sobre o Sabiá</a>
      </div>

    </section>
      
  );
}

export default Botao;