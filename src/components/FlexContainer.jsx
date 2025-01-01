
function FlexContainer(props) {
  return <div className="container m-auto grid grid-cols-3 gap-4">
    {props.children}
    </div>
  
}

export default FlexContainer
