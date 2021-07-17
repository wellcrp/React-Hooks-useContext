import { useInitialContext } from '../../Initial/initialContext';

function CategoryComponent() {
    const { categoryName } = useInitialContext();

    return (
        <>
        <span> Categoria por context: </span>
        <strong>{categoryName}</strong>
        </>
    );
}

export default CategoryComponent;
