import StreamWave from '../../assets/steamWave.png'
import reactMovie from '../../assets/reactMovie.png'
import BattleOperations from '../../assets/BattleOperations.png'
import EpicGames from '../../assets/EpicGames.png'
import ReactBurguer from '../../assets/ReactBurguer.png'
import PhpNews from '../../assets/PhpNews.png'
import SecretWord from '../../assets/SecretWord.png'
import StrangerThings from '../../assets/StrangerThings.png'
import Task from '../../assets/Task.gif'
import LoginRegisterComplete from '../../assets/LoginRegisterComplete.png'


import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { BiLogoCss3 } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { BiLogoPhp } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si';

const Projects = () => {
  return (
    <article>
      <div>
        <h1 className=" max-sm:text-[20px] text-[35px] font-bold">Explorando Projetos Pessoais</h1>
      </div>
      <div className="w-[80%] text-start mt-[10px] border-b-[1px] pb-[20px] border-gray-700 text-[1.1em]">
        <p className="text-gray-200 w-[100%]">
          Minha paixão pela criação de novos projetos é alimentada pela convicção de que é a maior chave para adquirir conhecimento. Nesta página, você tem a oportunidade de explorar o resultado desse entusiasmo, com acesso a 10 sites que desenvolvi com dedicação e criatividade.
        </p>
      </div>
      <article className='md:grid grid-cols-2 grid-rows-2	md:w-[850px] md:p-[10px]'>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700  max-sm:mr-[10%] mr-[3%] m-[10px] '>
          <a href="https://f55bae68.streamwavespotify-front.pages.dev/login">
            <img className='w-[100%] rounded-2xl' src={StreamWave} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>StreamWaver</p>
            <p className=' p-[10px] w-[100%]'>Explore e aproveite suas músicas favoritas como nunca antes com esta incrível aplicação que utiliza a poderosa API do Spotify!</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <BiLogoTypescript />
            <BiLogoCss3 />
            <DiNodejs />
            <SiMongodb />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://reactmovie-ivory.vercel.app">
            <img className='w-[100%] rounded-2xl' src={reactMovie} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>ReactMovie</p>
            <p className=' p-[10px] w-[100%]'>Desfrute de filmes e séries com a API exclusiva de autoria própria nessa aplicação.</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <DiJavascript1 />
            <BiLogoCss3 />
            <DiNodejs />
            <SiMongodb />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://github.com/Matheus-Loubach/Sistema_Login_Register-Front">
            <img className='w-[100%] rounded-2xl' src={LoginRegisterComplete} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>Sistema Cadastro</p>
            <p className=' p-[10px] w-[100%]'>Este projeto oferece um robusto sistema de autenticação e registro de usuários, garantindo segurança e precisão na validação de informações.</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <DiJavascript1 />
            <BiLogoCss3 />
            <DiNodejs />
            <SiMongodb />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://landing-page-epic-games.vercel.app">
            <img className='w-[100%] rounded-2xl' src={EpicGames} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>Landing Page Epic</p>
            <p className=' p-[10px] w-[100%]'>Uma atraente Landing Page que apresenta um redesenho da Epic Games, construída com React</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <DiJavascript1 />
            <BiLogoCss3 />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://react-burger-fs3u.vercel.app">
            <img className='w-[100%] rounded-2xl' src={ReactBurguer} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>React Burguer</p>
            <p className=' p-[10px] w-[100%]'>Menu de Lanches Online: Sabor, Velocidade e Estilo!</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <DiJavascript1 />
            <BiLogoCss3 />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://desafioweb123.000webhostapp.com">
            <img className='w-[100%] rounded-2xl' src={PhpNews} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>Cadastro De Noticias</p>
            <p className=' p-[10px] w-[100%]'>Aplicação de Cadastro de Notícias PHP: Explore, Cadastre e Descubra!</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <BiLogoPhp />
            <SiMysql />
            <DiJavascript1 />
            <BiLogoCss3 />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://secret-word-blond.vercel.app">
            <img className='w-[100%] rounded-2xl' src={SecretWord} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>Secret Word</p>
            <p className=' p-[10px] w-[100%]'>Um emocionante jogo de adivinhação de palavras, desenvolvido com ReactJS para oferecer uma experiência envolvente. O jogo apresenta desafios crescentes à medida que o jogador progride</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <DiJavascript1 />
            <BiLogoCss3 />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://jogo-da-memoria-gamma.vercel.app">
            <img className='w-[100%] rounded-2xl' src={StrangerThings} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>Jogo da memoria Stranger</p>
            <p className=' p-[10px] w-[100%]'>Um jogo temático baseado na série Stranger Things, desenvolvido com JavaScript nativo para aprimorar a habilidade na manipulação do DOM, complementado com recursos HTML5 e CSS3.</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <DiJavascript1 />
            <BiLogoCss3 />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://perform-task.vercel.app">
            <img className='w-[100%] rounded-2xl' src={Task} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>Perform Task</p>
            <p className=' p-[10px] w-[100%]'>O Perfom Task é uma aplicação no qual o usuário pode criar tarefas e deleta-las. Neste projeto foi utilizado ReactJS que conta com a funcionalidade de LocalStorage para o armazenamento das tarefas no navegador.</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <DiJavascript1 />
            <BiLogoCss3 />
          </div>
        </div>
        <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] m-[10px]'>
          <a href="https://batalha-de-operacoes.vercel.app">
            <img className='w-[100%] rounded-2xl' src={BattleOperations} alt="imagemProjeto" />
            <p className=' p-[10px] font-bold text-[1.1em]'>Battle Operations</p>
            <p className=' p-[10px] w-[100%]'>Desafio Matemático: Pontue Alto em 60 Segundos!</p>
          </a>
          <div className='flex items-center text-[35px] p-[10px]'>
            <p className='text-[15px] p-[5px]'>Tecnologias:</p>
            <FaReact />
            <DiJavascript1 />
            <BiLogoCss3 />
          </div>
        </div>
      </article>
    </article>
  )
}

export default Projects