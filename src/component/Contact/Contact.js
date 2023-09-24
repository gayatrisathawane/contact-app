 import './Contact.css';
 const Contact = ({img,name,mobile}) =>{
    return(
        <div className="card-container">
            <div className='contact-card'>
        <h1> {name}</h1>
        <h2>{mobile}</h2>
        </div>
        </div>
    )
 }
 export default Contact;