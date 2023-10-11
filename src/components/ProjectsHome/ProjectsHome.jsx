import StreamWave from '../../assets/steamWave.png'
import reactMovie from '../../assets/reactMovie.png'
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { BiLogoCss3 } from 'react-icons/bi';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
const ProjectsHome = () => {
    return (
        <div className="mt-[10px] ">
            <div className='flex justify-between w-[80%] items-center'>
                <h1 className="text-[1.2em] pt-[5px] pb-[20px] font-bold">Projetos recentes</h1>
                <a href="/Projects"><p className="text-[0.8em] max-sm:text-[0.9em] pt-[5px] pb-[20px] font-bold">Ver todos</p></a>
            </div>
            <article className='md:flex md:w-[850px]   max-sm:p-[10px]'>
                <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%]  mr-[3%] '>
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
                <div className='border-[1px] p-[10px] rounded-2xl border-gray-700 max-sm:mr-[10%] max-sm:mt-[5%] mr-[3%]'>
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
            </article>
        </div>
    )
}

export default ProjectsHome