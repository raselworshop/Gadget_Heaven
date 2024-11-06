import image from '../assets/Group.png'
const CartModal = ({ totalPrice, navigate }) => {
    return (
        <div>
            
            <dialog className="modal modal-bottom sm:modal-middle" open> 
                <div className="modal-box flex flex-col items-center">
                    <figure className='py-3'>
                        <img src={image} alt="" />
                    </figure>
                    <h3 className="font-bold text-2xl font-sora">Payment Successfully!</h3>
                    <p className="py-4">Thanks for purchasing.</p>
                    <p>Total:{totalPrice}</p>
                    <div className="modal-action">
                        <form method="dialog" className='flex justify-center items-center'>
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={()=> navigate('/')} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CartModal;