export const IDR = (num) => {
    return (num * 1).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
    });
};

export const USD = (num) => {
    return (num * 1).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};