import Styles from '../css/BannerConteudo.module.css'
import PropsConteudos from '../Componentes/PropsConteudo'
import Casimiro from '../imagens/casimiro.png'
import Abrahao from '../imagens/abrahao.png'
import Antares from '../imagens/antares.png'
import Fundacao from '../imagens/fundacao.png'
import Nacional from '../imagens/nacional.png'
import Pico from '../imagens/pico.png'

function BannerConteudo(){

    return(
        <section className={Styles.grande}>
            <div className={Styles.primeiro}>
                <div className={Styles.imagem1}>
                    <img  className={Styles.foto} src={Casimiro} alt='imagem1'/>
                </div>
                <div className={Styles.conteudo1}>
                    <PropsConteudos
                    titulo='Polo Astronômico Casimiro Montenegro Filho - Paraná'
                    texto='Com uma cúpula de 11 metros e capacidade para 70 pessoas, o planetário da FPTI-BR oferece uma experiência imersiva e educativa em Foz do Iguaçu. Equipado com tecnologia Saphera (modelo S6T), é o lugar perfeito para quem quer explorar as maravilhas do espaço.'
                    link='https://turismoitaipu.com.br/ingressos-e-passeios/#passeios'/>
                </div>
            </div>
            
            <div className={Styles.segundo}>
                <div className={Styles.conteudo2}>
                    <PropsConteudos
                    titulo='Observatório Abrahão de Moraes - São Paulo'
                    texto='Localizado em Valinhos (SP), o OAM é um espaço da USP voltado à observação do céu, com telescópios modernos e atividades educativas. Aberto ao público com agendamento, o observatório oferece noites de observação, visitas guiadas e eventos especiais.'
                    link='http://www.observatorio.iag.usp.br/index.php/agenda.html' />
                </div>
                <div className={Styles.imagem2}>
                <img  className={Styles.foto} src={Abrahao} alt='imagem2'/>
                </div>
            </div>

            <div className={Styles.terceiro}>
                <div className={Styles.imagem1}>
                <img  className={Styles.foto} src={Antares} alt='imagem3'/>
                </div>
                <div className={Styles.conteudo1}>
                    <PropsConteudos
                    titulo='Observatório Astronômico Antares - Bahia'
                    texto='Em Feira de Santana, o Observatório Antares, da UEFS, oferece ao público exposições científicas, telescópios, experimentos interativos e atividades educativas sobre o universo. A entrada é gratuita e as visitas podem ser agendadas'
                    link='http://www.antares.uefs.br/modules/conteudo/conteudo.php?conteudo=20&fbclid=PAZXh0bgNhZW0CMTEAAacCmU6KE192m1lxmnd04kADrjVAMHo7t4ouNnaUA__1QIfC5inM2RHOLgS3BQ_aem_qmZLvkNdoJyYA9r4hhAe6Q'/>
                </div>
            </div>

            <div className={Styles.quarto}>
                <div className={Styles.conteudo2}>
                    <PropsConteudos 
                    titulo='Fundação Centro de Estudos do Universo - São Paulo'
                    texto='Em Brotas (SP), a Fundação CEU oferece uma imersão no mundo da ciência e da astronomia. Com planetário, observações com telescópios e exposições interativas, o espaço é ideal para todas as idades e une educação e lazer em um ambiente inspirador.'
                    link='https://ceubrotas.com.br/publico/'/>
                </div>
                <div className={Styles.imagem2}>
                <img  className={Styles.foto} src={Fundacao} alt='imagem4'/>
                </div>
            </div>

            <div className={Styles.quinto}>
                <div className={Styles.imagem1}>
                    <img  className={Styles.foto} src={Nacional} alt='imagem5'/>
                </div>
                <div className={Styles.conteudo1}>
                    <PropsConteudos
                    titulo='Observatório nacional - Rio de Janeiro'
                    texto='Fundado em 1827, o Observatório Nacional é um dos mais antigos do Brasil e referência em pesquisas astronômicas, geofísicas e na medição da hora oficial do país. Oferece visitas com palestras e observações do céu, mediante agendamento.'
                    link='https://www.gov.br/observatorio/pt-br/assuntos/areas-de-atuacao/divulgacao-e-popularizacao-da-ciencia/calendario-de-eventos/calendario-de-eventos-2025'/>
                </div>
            </div>

            <div className={Styles.sexto}>
                <div className={Styles.conteudo2}>
                    <PropsConteudos 
                    titulo='Observatório Pico dos Dias - Minas Gerais'
                    texto='Localizado em Brazópolis, o Observatório do Pico dos Dias é o maior centro astronômico do Brasil, com telescópios avançados, incluindo o maior do país. Operado pelo LNA, oferece visitas com agendamento e eventos com "Portas Abertas", onde o público pode participar de observações do céu.'
                    link='https://www.gov.br/pt-br/servicos/visitar-o-observatorio-pico-dos-dias-em-grupos-escolares'/>
                </div>
                <div className={Styles.imagem2}>
                <img  className={Styles.foto} src={Pico} alt='imagem6'/>
                </div>
            </div>

        </section>
    )
}

export default BannerConteudo