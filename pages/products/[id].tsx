import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { productActionCreator } from '../../redux/action/products.action';

interface Props {

}

const Products = (props: Props) => {

    const dispatch = useDispatch();
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        if (id) {
            dispatch(productActionCreator(Number(id)))
        }
    }, [id])
    return (
        <div>

        </div>
    )
}
export default Products