export function convertNowToYYYYMMDD(selectedDate: Date) {
  const day = String(selectedDate.getDate()).padStart(2, "0"); // Lấy ngày, thêm '0' nếu cần
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0"); // Lấy tháng, thêm '0' nếu cần
  const year = selectedDate.getFullYear(); // Lấy năm

  return `${year}-${month}-${day}`; // Trả về chuỗi theo định dạng dd-mm-yyyy
}
