 import './Home.css';
 import phonebook  from '../../data/phonebook';
import {  useEffect, useState } from 'react';
import Contact from './../../component/Contact/Contact';
import shockingimg from './shocking.jpg';
 
 const Home = () =>{
    const [contacts,setContact]=useState(phonebook);
    const[searchTerm,setsearchTerm]= useState('')

    useEffect(()=>{
           const filteredContact =  phonebook.filter((contact)=>{
            const name = contact.name.toLowerCase();
            const mobile= contact.mobile.toString();

            const query = searchTerm.toLowerCase();

            return (name.includes(query) || mobile.includes(query))

           })
           setContact(filteredContact)
    },[searchTerm])

    
    return (
        <div  className='contact-conatainer'>
            <h1 className='text-center'>CONTACT BOOK 📱 </h1> 
            <input type="text" className='searchbar' value={searchTerm}
            onChange={(e)=>setsearchTerm(e.target.value)}/>
            <div className='contact-list'>
            {
            contacts.map((contact,index)=>{
           const {name,mobile}=contact;

           return <Contact name={name} mobile={mobile} key={index}  />
               
            })
            }
            </div>
        

        {
            contacts.length===0  ? <h2 className='text-center'>Oops No contact Found 
            <img src={shockingimg} className='imgshocking' alt="shockingimg"/></h2> : null 
        }
        </div>
    )
 }
 export default Home;