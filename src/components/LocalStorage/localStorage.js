import toast from "react-hot-toast"

export const getWishlist = () => {
    let wishlists = []
    const storedWishlists = localStorage.getItem('wishlist')
    if (storedWishlists) {
        wishlists = JSON.parse(storedWishlists)
    }
    return wishlists
}


export const setWishlist = (estate) => {
    let wishlists = getWishlist()

    const wishlistValidation = wishlists.find(wishlist => wishlist.id == estate.id)

    if(wishlistValidation){
        wishlists = wishlists.filter(wishlist => wishlist.id !== estate.id)
        toast.success('Successfully removed from Wishlist')
    }

    else{
        wishlists.push(estate)
        toast.success('Successfully added to Wishlist')
    }
    // wishlist.push(estate)

    const stringifiedWishlists = JSON.stringify(wishlists)
    localStorage.setItem('wishlist', stringifiedWishlists)
}