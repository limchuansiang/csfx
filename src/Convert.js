import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = "https://api.api-ninjas.com/v1/convertcurrency?"
const apiKey = "cMhhYFltd8P88D4Oh7N5iQ==mhs97rZbbsjR3id1"

const Convert = () => {
    const [have, setHave] = useState('')
    const [want, setWant] = useState('')
    const [amount, setAmount] = useState('')
    const [result, setResult] = useState('')
    const [convertButtonStyle, setconvertButtonStyle] = useState('none')
    const [errorMessage, seterrorMessage] = useState('none')
    const numOnly = /^[0-9\b]+$/

    const callConversion = async () => {
        if (`${amount}` !== '' && numOnly.test(`${amount}`) && `${want}` !== '' && `${want}` !== 'DEFAULT' && `${have}` !== '' && `${have}` !== 'DEFAULT') {
            console.log({ want }, { have })
            const response = await axios.get(`${apiUrl}have=${have}&want=${want}&amount=${amount}`, {
                headers: { 'X-Api-Key': `${apiKey}` }
            })
            console.log(response.data)
            setResult(`${response.data.new_amount} worth of `)
            setconvertButtonStyle('block')
        } else {
            seterrorMessage('block')
            setResult(``)
        }
    }


    const haveChange = (event) => {
        setHave(event.target.value)
        setconvertButtonStyle('none')
        seterrorMessage('none')
        setResult(``)
    }

    const amountChange = (event) => {
        setAmount(event.target.value)
        setconvertButtonStyle('none')
        seterrorMessage('none')
        setResult(``)
    }

    const wantChange = (event) => {
        setWant(event.target.value)
        setconvertButtonStyle('none')
        seterrorMessage('none')
        setResult(``)
    }

    //useEffect(() => callConversion);

    return (
        <section id="convert" className="about section dark-background">
            <div className="container section-title" data-aos="fade-up">
                <span>Best Exchange Rates<br /></span>
                <h2>Best Exchange Rates<br /></h2>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <form>
                        <div className='input-group mb-3'>
                            <h5>I have:</h5>
                        </div>
                        <div className='input-group mb-3'> 
                            <input type='text' name='amount' onChange={amountChange} value={amount} className='form-control' placeholder='Amount' />
                            <select className="form-select" onChange={haveChange} value={have} aria-label="Default select example">
                                <option value="DEFAULT">Currency I have...</option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                                <option value="CNY">CNY</option>
                                <option value="CHF">CHF</option>
                                <option value="NZD">NZD</option>
                                <option value="KRW">KRW</option>
                                <option value="HKD">HKD</option>
                            </select>
                        </div>
                        <div className='input-group mb-3'> </div>
                        <div className='input-group mb-3'> 
                            <h5>I will get:</h5>
                        </div>
                        <div className='input-group mb-3'> 
                            <h5>{result} </h5>
                            <select className="form-select" onChange={wantChange} value={want} aria-label="Default select example">
                                <option value="DEFAULT">Currency I want...</option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                                <option value="CNY">CNY</option>
                                <option value="CHF">CHF</option>
                                <option value="NZD">NZD</option>
                                <option value="KRW">KRW</option>
                                <option value="HKD">HKD</option>
                            </select>
                        </div>
                        <div className='input-group mb-3'>
                        </div>
                        <div className='input-group mb-3'> 
                            <button className='btn btn-primary' type='button' onClick={callConversion} style={{width:'370px',height:'45px',border:'none'}}>Convert!</button>
                        </div>
                    </form>

                    <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200" style={{display:convertButtonStyle}}>
                        <a className="read-more"><span>Oh no! We have sold out all our {want} at the moment. Please try other currencies.</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                    <div className="err col-lg-6 order-2 order-lg-1 content" style={{ display: errorMessage , color:'red'}}>
                        <p><b>Please check your fields!</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Convert
