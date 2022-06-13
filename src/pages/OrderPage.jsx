import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import Layout from '../Components/Layout';


const Container = styled.div`
    width: 100vw;
    height: 70vh;    
    background-color: white;
    display: flex;
    justify-content: left;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left:80px;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
    url("https://imgur.com/FYr6nWv.jpg");
    background-size: cover;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #8858ed;
  color: white;
  cursor: pointer;
`;
const OrderDetails = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_game', 'template_zldiokf', form.current, 'Rdz2wfv5lkb3uEkpg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    
    return (
        <Layout>
        <Container> 
        <Wrapper> 
        <div className="">    
            <Form ref={form} onSubmit={sendEmail}>
                <h3>Date facturare </h3>

                    <label>Nume Prenume</label>
                    <Input type="text" name="name"  placeholder='ex: Lazar Alexandru' required/> 

                    <label>Telefon</label>
                    <Input type="tel" name="phone"  placeholder='07xx xxx xxx' required/> 

                    <label>Email</label>
                    <Input type="email" name="email"  placeholder='ex: contact@gmail.com' required/> 

                    <label>Oras</label>
                    <select id="city" name="city">
                            <option value="city">Selecteaza orasul</option>
                            <option value="1">Bucuresti (Sectorul 1)</option>
                            <option value="2">Bucuresti (Sectorul 2)</option>
                            <option value="3">Bucuresti (Sectorul 3)</option>
                            <option value="4">Bucuresti (Sectorul 4)</option>
                            <option value="5">Bucuresti (Sectorul 5)</option>
                            <option value="6">Bucuresti (Sectorul 6)</option>
                    </select>
                    
                    <label>Adresa</label>
                    <Input type="text" name="address"  placeholder='Strada, numar, Bloc, scara, etaj, apartament' required/> 

                    <h3>Modalitate de plata</h3>
                    <label>Numerar</label>
                    <Input type="radio" name="cashPayment" /> 

                    {/* <label>Card Bancar</label>
                    <Input type="radio" name="cardPayment" />  */}
          
                    <Button type="submit" className="btn btn-secondary btn-block"> Trimite </Button>

            </Form>
        </div>  
        </Wrapper>
        </Container> 
         </Layout>
      );
    };

    export default OrderDetails;