
import fechar from '../../assets/x.png'
import { GrProjects } from 'react-icons/gr';
import { AiTwotoneHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';



// eslint-disable-next-line react/prop-types
const MenuMobile = ({ setMenuOn }) => {


  return (
    <div className='z-10 fixed w-[50%] h-[40%] rounded-2xl top-0	duration-500  inline-block bg-black/100 justify-center pointer-events-auto overflow-x-hidden overflow-y-scroll backdrop-blur-sm		 backdrop-opacity-60	'>

      <img className='w-[50px] invert p-[5px]	 duration-500' src={fechar} alt='FecharMenu' onClick={() => setMenuOn(false)} />

      <section className="p-[10%]">
        <ul>

          <div className='flex items-center text-center justify-center'>
            <AiTwotoneHome style={{ color: 'white', padding: 10, fontSize: 40}} />
            <a href="/"><li className="mt-[10px] rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[10px]">Início</li></a>
          </div>

          <div className='flex items-center text-center justify-center'>
            <GrProjects style={{ color: 'white', padding: 10, fontSize: 40, filter: 'invert()' }} />
            <a href="/About"><li className="mt-[10px] rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[10px]">Sobre</li></a>
          </div>

          <div className='flex items-center text-center justify-center'>
            <AiOutlineInfoCircle style={{ color: 'white', padding: 10, fontSize: 40 }} />
            <a href="/Projects"><li className="rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[4px]">Projetos</li></a>
          </div>

          <div className='flex items-center text-center justify-center'>
            <AiOutlineMessage style={{ color: 'white', padding: 10, fontSize: 40}} />
            <a href="/Contact"><li className="mt-[10px] rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[5px]">Contato</li></a>
          </div>
        </ul>
      </section>


    </div >
  )
}

export default MenuMobile