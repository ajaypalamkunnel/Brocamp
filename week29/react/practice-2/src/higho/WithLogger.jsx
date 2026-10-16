


const WithLogger = (WrappedComponent) => {
  return function EnhancedComponent(prop){
        console.log("rendering with props...");
        return <WrappedComponent {...prop}/>
  }
}

export default WithLogger