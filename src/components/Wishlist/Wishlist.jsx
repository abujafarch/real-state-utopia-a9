import { useState } from "react";
import { getWishlist } from "../LocalStorage/localStorage";
import WishlistDetails from "./WishlistDetails";

const Wishlist = () => {
    const [wishlists, setWishlists] = useState(getWishlist())

    return (
        <div className="mt-16">
            <div className="mt-5 mb-10">
                <h1 className="text-3xl text-center font-poppins font-bold">Wishlists</h1>
            </div>
            {
                wishlists.length == 0 && <div>
                    <h2 className="text-center font-semibold text-2xl">You have no wishlist items</h2>
                </div>
            }

            {
                wishlists && <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
                    {
                        wishlists.map(wishlist => <WishlistDetails key={wishlist.id} wishlist={wishlist} setWishlists={setWishlists}></WishlistDetails>)
                    }
                </div>
            }
        </div>

    );
};

export default Wishlist;