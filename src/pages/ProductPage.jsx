import beautyProduct from '../assets/beauty-item-1.jpg'

function ProductPage() {
    return (
        <div className="grid grid-cols-2 items-center w-[1300px] mx-auto">
            <div>
                <img src={beautyProduct} alt="" />
            </div>
            <div>
                <p>product 1</p>
                <p>$30</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p>Availability</p>
            </div>
        </div>
    );
}

export default ProductPage;