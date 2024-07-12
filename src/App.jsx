import './App.css'
import { RecoilRoot } from 'recoil'
import Todo from './components/Todo'
function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={2} />
        <Todo id={1} />
      </RecoilRoot>
    </>
  )
}

export default App
