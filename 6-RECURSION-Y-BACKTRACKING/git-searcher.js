function searchGift(gifts, giftName, index = 0){
    if (index=== gifts.length) {
        return console.log(`${giftName} not found`);
    }
    if (gifts[index] === giftName) {
        return console.log(`${giftName} found at index ${index}`);
    }
    return searchGift(gifts, giftName, index + 1);
}
export {searchGift}; 