const MenuPc = () => {


    return (
        <div className="w-[250px]">
            <section className=" border-b-[1px] border-gray-700 pb-[10px]  w-[60%]">
                <div>
                    <h1 className="text-white text-[20px]">Matheus Affonso</h1>
                    <a href="https://github.com/Matheus-Loubach"><p className="text-gray-400 text-[12px] font-bold cursor-pointer">@matheus-loubach</p></a>
                </div>
                <p className="text-white mt-[10px] font-bold">Desenvolvedor Web & Mobile</p>
            </section>
            <section className="mt-[10px]  border-b-[1px] pb-[10px] border-gray-700  w-[60%]">
                <ul>
                    <a href="/"><li className="mt-[10px] rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[10px]">Início</li></a>
                    <a href="/About"><li className="mt-[10px] rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[10px]">Sobre</li></a>
                    <a href="/Projects"><li className="mt-[10px] rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[10px]">Projetos</li></a>
                    <a href="/Contact"><li className="mt-[10px] rounded-lg cursor-pointer bg-transparent  hover:bg-blue-600 text-white p-[10px]">Contato</li></a>
                </ul>
            </section>
        </div>
    )
}

export default MenuPc