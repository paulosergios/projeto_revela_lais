import './carrossel.css'

function Carrossel(){

	return(
	<section className="slider">
        <input name='slide' type="radio" id="radio" id="radio_1" />

        <input name='slide' type="radio" id="radio" id="radio_2" />

        <input name='slide' type="radio" id="radio" id="radio_3" />

        <input name='slide' type="radio" id="radio" id="radio_4" />

    
        <div className="slider-content">
            <div className="slider-item"><img src="./img/carousel_1.png" alt="equipe_medica"/></div>
            <div className="slider-item"><img src="./img/carousel_2.png" alt="equipe_medica"/></div>
            <div className="slider-item"><img src="./img/carousel_3.png" alt="equipe_medica"/></div>
            <div className="slider-item"><img src="./img/carousel_4.png" alt="equipe_medica"/></div>
        </div>
    </section>
	);
}

export default Carrossel;