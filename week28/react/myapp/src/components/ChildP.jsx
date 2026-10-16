
const ChildP = ({onSendMessage}) => {

    const sendMessage = () =>{
        onSendMessage("Hello from child!!")
    }


  return (
    <div>
        <h2>Child component</h2>
        <button onClick={sendMessage}>send message to parent</button>
    </div>
  )
}

export default ChildP