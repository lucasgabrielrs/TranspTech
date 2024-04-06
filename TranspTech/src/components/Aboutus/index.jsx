import './style/Aboutus.css'

const Aboutus = () => {
    return (
        <>
            <section className='aboutus'>
                <div className='container-aboutus'>
                    
                    <span>Sobre nós</span>
                    <h2>TranspTech</h2>
                    <p>Somos especialistas em desenvolver soluções web personalizadas para o setor de transportes. Com mais de duas décadas de experiência, combinamos tradição e tecnologia para potencializar sua logística e gestão.<br></br> Nossas plataformas são robustas, seguras e desenhadas para facilitar o seu trabalho no dia a dia.</p>
                </div>
                <img src='./image/aboutus.jpg' className="imagemAboutUs"></img>

            </section>
        </>
    )
}

export default Aboutus;