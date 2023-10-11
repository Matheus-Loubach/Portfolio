import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const Contact = () => {
    return (
        <div>
            <div>
                <h1 className="text-[35px] font-bold">
                    Contato
                </h1>
                <div className="w-[80%] text-start mt-[10px] border-b-[1px] pb-[20px] border-gray-700 text-[1.1em]" >

                    <p>
                        Se você está interessado em uma potencial colaboração ou apenas deseja manter-se
                        atualizado com meu trabalho, fique à vontade para entrar em contato.
                    </p>
                </div>
            </div>
            <section>
                <p className="text-[15px] font-bold mt-[10px]">Minhas redes sociais</p>
                <div className='flex text-[40px] p-[10px]'>
                    <a className='mr-[3%]' href="https://www.linkedin.com/in/matheus-loubach/">   <AiFillLinkedin /></a>
                    <a href="https://www.instagram.com/matheus.loubach/"><BsInstagram /></a>
                </div>
            </section>
        </div>
    )
}

export default Contact