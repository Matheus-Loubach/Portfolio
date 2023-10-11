
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoCss3 } from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { BiLogoPhp } from 'react-icons/bi';
import CurriculoPDF from '../../download/CurriculoDev2.pdf';


const About = () => {

  const openPDF = () => {
    window.open(CurriculoPDF, '_blank');
  };


  return (
    <div className="text-start">
      <section className="max-sm:w-[100%] max-sm:font-semibold w-[50%] md:ml-[10%] text-gray-200 border-b-[1px] pb-[20px] border-gray-700 ">
        <div>
          <h1 className="text-[1.4em] font-bold">Sobre mim</h1>
        </div>
        <div className="p-[10px] text-[1.1em]">
          <p className="mb-[10px]">
            Meu nome é Matheus Affonso, e sou um apaixonado em Desenvolvedor Web e Mobile,
            além de estudante de Engenharia da Computação.
          </p>
          <p className="mb-[10px]">
            Meu mergulho no mundo da programação teve início em 2020, quando comecei a explorar as linguagens HTML,
            CSS e JavaScript. Rapidamente, percebi que estava trilhando o caminho da minha futura profissão,
            e minha paixão por programação só cresceu a cada dia.
            Desde então, tenho adorado explorar e aprender novas tecnologias.
          </p>
          <p className="mb-[10px]">
            Atualmente, estou construindo minhas aplicações com um
            conjunto impressionante de ferramentas, incluindo React.js, Next.js, TypeScript,
            Node.js, JavaScript, MongoDB, SQL e PHP.
          </p>
          <p>
            Sou fascinado por interfaces minimalistas, sou adepto do modo escuro e sou um entusiasta da tecnologia
            em todas as suas formas. Além disso, a música é a minha terapia, e nada supera o prazer de desfrutar de ótimas canções.
          </p>
        </div>
       <button className='text-[18px] font-medium p-[5px] border-[1px] border-solid border-[#ebebeb] rounded-xl' onClick={openPDF}>Download C.V</button>

      </section>
      <section className="w-[50%] md:ml-[10%] text-gray-200 pt-[20px]">
        <h2 className="text-[1.2em]  font-bold">Skills</h2>
        <div className='md:flex md:text-[50px] max-sm:text-[50px] mr-[-35%]  p-[10px] '>
          <div className='flex'>
            <FaReact />
            <DiJavascript1 />
            <BiLogoTypescript />
            <BiLogoTailwindCss />
            <BiLogoCss3 />
          </div>
          <div className='flex'>
            <AiFillHtml5 />
            <DiNodejs />
            <SiMongodb />
            <SiMysql />
            <BiLogoPhp />
          </div>

        </div>

      </section>
    </div>
  )
}

export default About