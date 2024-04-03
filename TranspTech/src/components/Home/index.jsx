
import { useState,useEffect } from 'react'
import './style/Home.css'

const Home = () => {
    
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <h2>Soluções Web para <br /><strong>Gigantes da Estrada</strong></h2>
                    <p>A sua frota percorre as estradas com eficiência<br></br> o seu site deve navegar pela web com a mesma destreza. <br></br>Oferecemos soluções web que expandem seu alcance e aceleram seus resultados.</p>
                    <div className='container-buttons'>
                        <button>Conheça quem somos</button>
                        <button className='transparente'>Veja os preços</button>
                    </div>
                </div>    
             </section>
        </>
    )
}

export default Home;