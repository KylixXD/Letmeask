import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useParams } from 'react-router-dom';
import '../styles/room.scss';

export function Room(){
  const params = useParams();

  return(
    <div id="page-room">
      <header>
        <div className='content'>
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code="1223213214341"/>
        </div>
      </header>  

      <main>
        <div className="room-title">
          <h1>Sala Cu</h1>
          <span>4 perguntas</span>
        </div> 

        <form>
          <textarea 
            placeholder="o que você quer perguntar?"
          />
          <div className="form-footer">
            <span>Para enviar uma pergunta,<button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>  
      </main>
    </div>
  );
}