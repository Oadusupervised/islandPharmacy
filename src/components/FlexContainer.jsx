
function FlexContainer(props) {
  return <div 
   className="flex flex-col h-screen bg-orange-400"
  >
    {props.children}
    </div>
  
}

export default FlexContainer
