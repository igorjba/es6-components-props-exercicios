import './App.css'
import UserCard from './components/UserCard'
import Avatar from './components/Avatar'
//importar as imagens assets para o projeto
import kelvinCosta from './assets/kelvin-costa.png'
import charlesSantos from './assets/charles-santos.png'
import annaBia from './assets/anna-bia.png'
import marioHisashi from './assets/mario-hisashi.png'

const people = [
  {
    id: 1,
    name: 'Kelvin Costa',
    avatar: `${kelvinCosta}`,
    nickname: '@costa',
    followed: '140',
    following: '207',
  },
  {
    id: 2,
    name: 'Charles Santos',
    avatar: `${charlesSantos}`,
    nickname: '@charles.santos',
    followed: '302',
    following: '419',
  },
  {
    id: 3,
    name: 'Anna Bia',
    avatar: `${annaBia}`,
    nickname: '@anab',
    followed: '842',
    following: '150',
  },
  {
    id: 4,
    name: 'Mario Hisashi',
    avatar: `${marioHisashi}`,
    nickname: '@hisashi',
    followed: '28',
    following: '17',
  }
];

function App() {

  return (
    <div className="App">
      {people.map((person) =>
        <UserCard
          key={person.id}
          name={person.name}
          nickname={person.nickname}
          followed={person.followed}
          following={person.following}

        >
          <Avatar
            avatar={person.avatar}
          />
        </UserCard>
      )}
    </div>
  )
}

export default App
