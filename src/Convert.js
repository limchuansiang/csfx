import React, { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = "https://api.api-ninjas.com/v1/convertcurrency?"
const apiKey = "cMhhYFltd8P88D4Oh7N5iQ==mhs97rZbbsjR3id1"

const Convert = () => {
    const [have, setHave] = useState('')
    const [want, setWant] = useState('')
    const [amount, setAmount] = useState('')
    const [result, setResult] = useState('')

    const callConversion = async () => {
        if (`${want}`!=='' && `${want}`!=='DEFAULT' && `${have}`!=='' && `${have}`!=='DEFAULT') {
            console.log({want},{have})
            const response = await axios.get(`${apiUrl}have=${have}&want=${want}&amount=${amount}`, {
                headers: { 'X-Api-Key': `${apiKey}` }
            })
            console.log(response.data)
            setResult(response.data.new_amount)
        }
    }

    const haveChange = (event) => {
        setHave(event.target.value)
    }

    const amountChange = (event) => {
        setAmount(event.target.value)
    }

    const wantChange = (event) => {
        setWant(event.target.value)
        callConversion()
    }

    useEffect(() => callConversion);

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
                            <input type='text' name='amount' onChange={amountChange} value={amount} className='form-control' placeholder='I have ...' />
                            {/* <input type='text' name='have' onChange={haveChange} value={have} className='form-control' placeholder='currency i have' /> */}
                            <select className="form-select" onChange={haveChange} value={have} aria-label="Default select example">
                                <option value="DEFAULT"></option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                            </select>
                            <p>
                                I will get {result}
                            </p>
                            {/* <input type='text' name='want' onChange={wantChange} value={want} className='form-control' placeholder='currency i want' /> */}
                            <select className="form-select" onChange={wantChange} value={want} aria-label="Default select example">
                                <option value="DEFAULT"></option>
                                <option value="GBP">GBP</option>
                                <option value="AUD">AUD</option>
                            </select>
                            <button className='btn btn-primary' type='submit' onClick={callConversion}>Search</button>
                        </div>
                    </form>

                    <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
                        <a href="" className="read-more"><span>Oh man, we have sold out this currency at the moment. Please try again.</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Convert
