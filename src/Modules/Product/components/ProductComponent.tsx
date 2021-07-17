import CategoryComponent from '../../Category/components/CategoryComponent';
import { useInitialContext } from '../../Initial/initialContext';

function ProductComponent() {
    const { productName } = useInitialContext();

    return (
        <>
            <span>Produto Nome por context: </span>
            <strong>{productName}</strong>
            
            <CategoryComponent />
        </>
    );
}

export default ProductComponent;
