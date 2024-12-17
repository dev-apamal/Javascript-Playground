import Header from "./components/Header"
import Entry from "./components/Entry.jsx"
import data from "/src/data.js"

export default function App(){
  const dat = data.map(function(x){
    return <Entry 
      key={x.id} 
      {...x}
  />
  })
  return (
    <>
      <Header />
      <main>{dat}</main>
    </>
  )
}