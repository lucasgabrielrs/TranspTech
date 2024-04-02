import { useState } from 'react'
import Header from '../components/Header/index'
import Home from '../components/Home'
import Aboutus from '../components/Aboutus'

const HomePage = () => {
    return (
      <>
        {/*Aqui são chamados os componentes da Homepage*/}
        <Header />
        <Home />
        <div id='aboutus'><Aboutus /></div>
      </>
    )
  }
export default HomePage