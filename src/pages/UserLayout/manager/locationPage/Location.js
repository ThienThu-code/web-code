import { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import "./Location.css"

const Location = () => {
  const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Thay bằng API Key của bạn

  // Vị trí mặc định (Hà Nội)
  const defaultLocation = { lat: 21.028511, lng: 105.804817 };

  const [location, setLocation] = useState(defaultLocation);
  const [address, setAddress] = useState("Hà Nội, Việt Nam");
  const [error, setError] = useState(null);

  // Lấy vị trí thực tế của người dùng
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });

          // Lấy địa chỉ từ tọa độ
          const userAddress = await getAddress(latitude, longitude);
          setAddress(userAddress);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Trình duyệt không hỗ trợ Geolocation.");
    }
  };

  // Gọi Google Maps API để lấy địa chỉ từ tọa độ
  const getAddress = async (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK") {
        return data.results[0].formatted_address;
      } else {
        throw new Error("Không tìm thấy địa chỉ.");
      }
    } catch (error) {
      console.error(error);
      return "Lỗi khi lấy địa chỉ.";
    }
  };

  return (
    <div className="location-container">
      <h2>📍 Xác Định Vị Trí Của Bạn</h2>

      {/* Hiển thị bản đồ trước */}
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "300px" }}
          center={location}
          zoom={15}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>

      {/* Hiển thị địa chỉ nếu có */}
      <p>🏠 Địa chỉ: {address}</p>

      {/* Nút lấy vị trí */}
      <button onClick={getLocation}>Lấy vị trí hiện tại</button>

      {error && <p className="error">⚠ {error}</p>}
    </div>
  );
};

export default Location;
