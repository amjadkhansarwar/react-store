import {Row, Col} from 'react-bootstrap'
import {productArray} from '../ProductsStore'
import ProductCard from '../components/ProductCard'

function Store() {
    return(
        <>
           <h1 align='center' className='p-3'>Welcome to your Store!</h1>
           <Row xs={1} md={3} className='g-4'>
                {productArray.map((product, idx)=>(
                    <Col align='center' key={idx}>
                    <ProductCard product={product}/>
                </Col>
                ))}
           </Row>
        </>
    )
}

export default Store