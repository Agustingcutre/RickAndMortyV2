function Rick(props) {
    return (
        <>
        <img src={props.datos.image}></img>
         <h3 className='APTarjetas'> {props.datos.name} </h3>
         <p>{props.datos.origin.name}</p>   
         <p>{props.datos.species}</p>
         <p>{props.datos.status}</p>


        </>
        
          
          
    );
  }




export default Rick;