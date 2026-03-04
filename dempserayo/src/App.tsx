import { Button } from "./Button/button"
import { Tittle } from "./Title/title"

function App() {

  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-slate-300">
          <Tittle>Hola</Tittle>
          <Button>Login</Button>
      </div>
    </>
  )
}

export default App
