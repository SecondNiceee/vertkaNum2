export type TOrderPrice = {
    finalPrice : number,
    floorPrice : number,
    regularPrice : number
}

export type TOrder = {
    displayName : string,
    price : TOrderPrice,
    displayAssets : [{
        full_background : string,
        background : string
    }]
}