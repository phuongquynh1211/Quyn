import React from "react";
import { FaBookOpen, FaLightbulb } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="body-container" style={{ backgroundColor: "#ffebcd" }}>
      <div className="body">
        <div className="body-title">
          <h1>
            <FaLightbulb /> WHAT IS YOUR READING INTEREST??? <FaBookOpen />
          </h1>
          <p>
            Children’s books, psychology, romance, religion, science, story
            books....
          </p>
        </div>
        <div className="book-covers">
          <img src={"../../assets/images/Chuchim.png"} alt="Chú chim tí hon" />
          <img src={"../../assets/images/Doivannam.jpg"} alt="Đợi vãn năm" />
          <img src={"../../assets/images/Macdep.png"} alt="Thao Túng Tâm Lý" />
          <img src={"../../assets/images/Thanhgiong.jpg"} alt="Thánh Gióng" />
          <img
            src={"../../assets/images/Dieukydieu.jpg"}
            alt="Điều kì diệu của tiệm tạp hóa NAMIYA"
          />
        </div>
      </div>

      <footer className="footer">
        <button>Explore Now</button>
      </footer>
    </div>
  );
};

export default HomePage;
