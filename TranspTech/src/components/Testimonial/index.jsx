
import { useState,useEffect } from 'react'
import './style/Testimonial.css'

const Testimonial = () => {
    
    return (
        <>
            <section className='testimonial'>
                <div className="container-testimonial">
                   <img src="./image/stars.svg" alt="Estrelas" />
                   <p>“Como proprietário de uma empresa de transportes com longa tradição no mercado, eu sabia que precisava modernizar nossa presença online para manter nossa competitividade. Com a solução web da TranspTech, não só atualizamos nossa imagem, como também otimizamos nossa operação logística. O site que eles desenvolveram para nós é intuitivo, representa visualmente a essência do nosso negócio e oferece aos clientes uma experiência fluida desde o primeiro clique. Nossa marca nunca esteve tão forte e nossa visão de futuro, tão clara. Recomendo a TranspTech a qualquer transportadora que queira levar seu negócio para o próximo nível.”</p>
                   <div className='avatar'>
                    <p><span>João Martins</span><br></br>CEO da Martins transportes</p>
                   </div>
                </div>    
             </section>
        </> 
    )
}

export default Testimonial;