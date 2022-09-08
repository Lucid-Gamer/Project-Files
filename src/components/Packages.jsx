import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import gold from '../images/Gold.png';
import platinum from '../images/platinum.png';
import diamond from '../images/diamond.png';
import silver from '../images/silver.jpg'
import '../App.css'

const Packages = () => {
    return (
        <div>
            <div className='card-group mt-5' id='card'>
                <Card className='col-3 me-3 bg-secondary text-light' style={{width:"80", height:"160"}}>
                    <Card.Header className='' ><center><img src={silver} alt='Not Found' height={150} width={200} /></center></Card.Header>
                    <Card.Body>
                        <div>
                            <p>Silver Membership Plan</p>
                            <p>Price: </p>
                            <p>Validity(Days): </p>
                        </div>
                    </Card.Body>
                    <Card.Footer><center><Link to={"/react"} className='btn btn-primary btn-lg me-3'>Add to Cart</Link></center></Card.Footer>
                </Card>
                <Card className='col-3 me-3 bg-warning text-light'>
                    <Card.Header className='color-gold'><center><img src={gold} alt='Not Found' height={150} width={200} /></center></Card.Header>
                    <Card.Body>
                        <div>
                            <p>Gold Membership Plan</p>
                            <p>Price: </p>
                            <p>Validity(Days): </p>
                        </div>
                    </Card.Body>
                    <Card.Footer><center><Link to={"/react"} className='btn btn-primary btn-lg me-3'>Add to Cart</Link></center></Card.Footer>
                </Card>
                <Card className='col-3 me-3 bg-dark text-light'>
                    <Card.Header className='color-gold'><center><img src={platinum} alt='Not Found' height={150} width={200} /></center></Card.Header>
                    <Card.Body>
                        <div>
                            <p>Platinum Membership Plan</p>
                            <p>Price: </p>
                            <p>Validity(Days): </p>
                        </div>
                    </Card.Body>
                    <Card.Footer><center><Link to={"/react"} className='btn btn-primary btn-lg me-3'>Add to Cart</Link></center></Card.Footer>
                </Card>
                <Card className='col-3 me-3 bg-muted text-dark'>
                    <Card.Header className='color-gold'><center><img src={diamond} alt='Not Found' height={150} width={200} /></center></Card.Header>
                    <Card.Body>
                        <div>
                            <p>Diamond Membership Plan</p>
                            <p>Price: </p>
                            <p>Validity(Days): </p>
                        </div>
                    </Card.Body>
                    <Card.Footer><center><Link to={"/react"} className='btn btn-primary btn-lg me-3'>Add to Cart</Link></center></Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default Packages