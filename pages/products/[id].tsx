import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productActionCreator } from '../../redux/action/products.action';
import { selectProduct, selectProductIsFetching } from '../../redux/selectors/product.selector';
import ReactStars from 'react-stars'
import { Loading } from '../../components/loading';

interface Props {

}

const Products = (props: Props) => {
    const [rating, setRating] = useState(5)
    const product = useSelector(selectProduct)
    const isFetching = useSelector(selectProductIsFetching)
    const dispatch = useDispatch();
    const router = useRouter()
    const { id } = router.query
    const handleRating1 = (rate: number) => setRating(rate)

    useEffect(() => {
        if (id) {
            dispatch(productActionCreator(Number(id)))
        }
        console.log(product)
    }, [id])
    if (isFetching) {
        return <Loading loading={isFetching} />
    } else
        return (
            <div className='container flex text-stone-700  h-screen flex-col md:flex-row'>
                <div className='flex items-center  p-2  md:w-2/4 justify-center'>
                    <img src={product?.image ? product.image : ""} className='md:w-96 w-64 p-4' />
                </div>
                <div className='flex flex-col    justify-center font-bold p-8 '>
                    <div className=' flex space-y-5  justify-start h-96 flex-col p-4 rounded-lg md:bg-gray-100 md:shadow-md'>
                        <div className='md:inline-flex text-sm justify-between '>
                            <span>
                                <h1 className='text-xl'>{product?.title}</h1>
                                <h1 className='text-gray-400'>{product?.category}</h1>
                            </span>
                            <ReactStars
                                count={5}
                                half={true}
                                value={product?.rating.rate}
                                edit={false}
                                color2={'#ffd700'} />
                        </div>
                        <span className='inline-flex space-x-2'>
                            <label>
                                <h2 className=''>Price:</h2>
                            </label>
                            <h2 className='font-semibold text-green-600 text-lg'>
                                ${product?.price}
                            </h2>
                        </span>
                        <span>
                            <h2>
                                DESCRIOTION
                            </h2>
                            <p className='text-gray-400 font-normal text-sm'>
                                {product?.description}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        )
}
export default Products