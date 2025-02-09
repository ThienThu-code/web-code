// Hàm formatter nhận vào một số và trả về dạng tiền tệ theo định dạng Việt Nam (VND)
export const formatter = (number) => {
    // Sử dụng Intl.NumberFormat để định dạng số theo kiểu tiền tệ
    return new Intl.NumberFormat("vi-VN",{
        // Chỉ định kiểu định dạng là 'currency' (tiền tệ)
        style: "currency", 
        // Chỉ định đơn vị tiền tệ là VND (đồng Việt Nam)
        currency: "VND"
    }).format(number); // Áp dụng định dạng cho số và trả về kết quả
}
