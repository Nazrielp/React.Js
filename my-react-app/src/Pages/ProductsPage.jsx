import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragment/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu Sneakers">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique veniam quam incidunt tempora voluptatem ipsum, laboriosam rerum magnam asperiores debitis?</CardProduct.Body>
                <CardProduct.Footer price="Rp. 100.000"></CardProduct.Footer>
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" />
                <CardProduct.Body title="Sepatu Sneakers">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique veniam quam incidunt tempora voluptatem ipsum, laboriosam rerum magnam asperiores debitis?</CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000.000"></CardProduct.Footer>
            </CardProduct>
        </div>

    );
};

export default ProductsPage;