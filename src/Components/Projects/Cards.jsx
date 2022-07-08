import './Cards.css'

function Cards() {
    return (
        <>
         <h1 className='title'>4 projetos feitos na reprograma</h1>
    
          <div className="cards-container">
            <div className="cards">
              <p className='sub-title'>Meu diario da reprograma</p>
              <img className="image-card" src="https://media.giphy.com/media/MVER32yY2v49sFgBci/giphy.gif" alt="gif-issa" />
             <p>Um site com conteúdos de introdução à programação, usando React.</p>
            </div>
    
            <div className="cards">
              <p className='sub-title'>HTML</p>
              <img className="image-card" src="https://media.giphy.com/media/Qn7UUFxtx35SNh5k1h/giphy.gif" alt="gif-superman" />
             <p> Uma aplicação em HTML para treinar os fundamentos e semântica.</p>
            </div>
    
    
            <div className="cards">
              <p className='sub-title'>M de maravilhosa</p>
              <img className="image-card" src="https://media.giphy.com/media/ZO4ZnOueIT2OwyXEd6/giphy.gif" alt="gif-carmem" />
             <p>Um projeto para finalização de módulo HTML e CSS.</p>
            </div>
    
    
            <div className="cards">
              <p className='sub-title'>JavaScript</p>
              <img className="image-card" src="https://media.giphy.com/media/DXodg4sZyf6Qh7Tqma/giphy.gif" alt="gif-digimon" />
             <p>Vamos procurar Digimons? Busca, cards e consumo de API através de Javascript puro.</p>
            </div>
    
          </div>
    
            <h2 className='title'>Outros Projetos no meu Github</h2>
    
        </>
      );
    }
    
  
  export default Cards;
  