import Image from "next/image";


const TopCatCard = ({product}) => {
    const {productImage,productName,price}=product
    return (
        <div>
            <div className='bg-[#f4f5f778]  rounded-md relative h-fit my-8 p-4  w-fit'>
                <Image className=" rounded-4xl " height={200} width={200} src={productImage[0]}/>

            </div>
        </div>
    );
};

export default TopCatCard;