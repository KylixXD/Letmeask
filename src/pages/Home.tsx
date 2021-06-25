import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import GoogleIconImg from '../assets/images/google-icon.svg';
import'../styles/auth.scss'
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../services/firebase'


export function Home(){
  const history = useHistory();


  function handleCreateRoom(){
    history.push('/rooms/new');   
  }

  return(
    <div id="page-auth">
      <aside>
          <img src= {illustrationImg} alt="Ilustração de perguntas e respostas" />
          <strong>Crie Salas de Q&amp;A ao vivo</strong>
          <p>Tire as dúvidas do seu público em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={GoogleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
             type="text" 
             placeholder="Digite o código da sala"
             />
             <Button type="submit">
               Entrar na sala
             </Button>
          </form>
        </div>
      </main>
    </div>

  )
}