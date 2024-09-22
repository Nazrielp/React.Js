import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">
            {children}
        </div>
    );
};

const Header = ({ image }) => {
    return (
        <a href="#">
            <img src={image} alt="product" className="p-8 rounded-t-lg" />
        </a>
    );
};

const Body = ({ children, title }) => {
    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-green-500">{title}</h5>
            </a>
            <p className="text-s text-white">
                {children}
            </p>
        </div>
    );
};

const Footer = ({ price }) => {
    return (
        <div className="flex item-center justify-between px-5 pb-5">
            <span className="text-xl text-white font-bold">{price}</span>
            <Button className="bg-green-500">Add To Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;