import ProjectsHome from "../../components/ProjectsHome/ProjectsHome"


const Home = () => {



  return (
    <div>
      <header className="text-center ">
        <div className="text-start">
          <h1 className="text-[35px] font-bold">Matheus Affonso</h1>
          <p className="text-gray-400 text-[12px] font-bold">Rio de Janeiro, Brasil</p>
        </div>
        <nav className="w-[80%] max-sm:w-[90%] text-start mt-[10px] border-b-[1px] pb-[20px] border-gray-700 text-[1.1em] max-sm:font-bold">
          <p className="text-gray-200">
            Como desenvolvedor web, minha missão é forjar experiências digitais que harmonizem com maestria
            uma estética elegante e uma funcionalidade excepcional. Minha paixão consiste em transformar
            linhas de código em experiências incríveis,
            assegurando que cada projeto narre uma história singular e cativante no vasto território da web.
          </p>
        </nav>
      </header>
      <ProjectsHome />
    </div>
  )
}

export default Home