import { useState } from 'react'
import Header from '../components/Header/index'
import Home from '../components/Home'

const HomePage = () => {
    return (
      <>
        {/*Aqui são chamados os componentes da Homepage*/}
        <Header />
        <Home />
      </>
    )
  }
export default HomePage