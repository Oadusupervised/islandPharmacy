
function FlexContainer(props) {
  return <div 
   className="flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    {props.children}
    </div>
  
}

export default FlexContainer
