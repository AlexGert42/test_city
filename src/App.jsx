import React from 'react';
import {Header} from './components/header/Header'
import {Content} from './components/content/Content'
import {Sidebar} from './components/sidebar/Sidebar'
import {Footer} from './components/footer/Footer'


export const App = () => {
  return (
    <div className={"wrapper"}>
        <Header/>
        <main className={"conteiner"}>
            <Sidebar/>
            <Content/>
        </main>
        <Footer/>
    </div>
  );
}


