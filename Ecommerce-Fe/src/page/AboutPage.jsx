import { Link } from "react-router-dom";
// import avatarImage from "../assets/ceo-hoangtrong.png";
// import nubacImage from "../assets/nut-bac.png";
// import storeImage from "../assets/store.png";
const AboutPage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 pt-4 pb-16">
        <nav class="flex mb-4" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link
                to="/"
                class="inline-flex items-center font-medium text-gray-700 hover:text-secondary dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  class="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span className="font-medium">Trang chủ</span>
              </Link>
            </li>
            {/* <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                class="ms-1 text-xl font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Projects
              </a>
            </div>
          </li> */}
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="ms-1 font-medium md:ms-2 dark:text-gray-400">
                  Giới thiệu
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl text-secondary text-center font-bold uppercase mb-4">
          chào mừng đến với PINE perfume
        </h1>
        <p className="mb-3">
          Được thành lập chưa lâu với bắt đầu từ con số 0 vào tháng 3/2023 bởi
          anh Trần Việt Phương tại Hà Nội và từ đó cái tên Tiệm Nước Hoa chính
          thức ra đời. Tuy chỉ là một cửa hàng non trẻ nhưng với sự nỗ lực và
          chăm chỉ cống hiến, Tiệm Nước Hoa đã nhanh chóng phát triển và trở
          thành một địa chỉ mua sắm nước hoa chính hãng uy tín tại Hà Nội.
        </p>
        <p className="mb-3">
          Với sự đam mê và tâm huyết của đội ngũ phát triển, Tiệm Nước Hoa cam
          kết mang đến cho khách hàng những sản phẩm chất lượng nhất. Trong đó
          nổi bật là các dòng nước hoa nam, nước hoa nữ, nước hoa unisex, nước
          hoa chiết… luôn được cập nhật và sàng lọc những thương hiệu nước hoa
          nổi tiếng nhất từ khắp nơi trên thế giới, như Chanel, Dior, Gucci,
          Creed, Tom Ford, và nhiều hơn nữa.
        </p>
        <p className="mb-3">
          Không chỉ đơn thuần là một cửa hàng bán nước hoa, Tiệm Nước Hoa còn là
          nơi để quý khách có thể trải nghiệm, tìm hiểu và tham khảo về thế giới
          nước hoa. Chúng tôi cung cấp những dịch vụ tư vấn chuyên nghiệp và
          giúp khách hàng tìm ra những loại nước hoa phù hợp với phong cách, sở
          thích và cảm nhận của mình.
        </p>

        <h2 className="font-bold text-2xl text-secondary mb-4">
          Phương chân hoạt động
        </h2>
        <ul className="list-disc pl-4 mb-8">
          <li>Luôn bán hàng chính hãng, rõ nguồn gốc xuất xứ</li>
          <li>Nhiệt tình với khách hàng</li>
          <li>Làm việc tỉ mỉ, cẩn thận, trau chuốt</li>
          <li>Giá thành hợp lý, đi đôi với chất lượng</li>
          <li>Uy tín luôn đặt lên hàng đầu</li>
        </ul>
        <img
          src="https://tiemnuochoa.vn/wp-content/uploads/2023/10/tiem-nuoc-hoa.jpg"
          alt=""
          className="mb-8"
        />
        <h2 className="font-bold text-2xl text-secondary mb-4">
          Lĩnh vực hoạt động
        </h2>
        <ul className="list-disc pl-4 mb-8">
          <li>Nước hoa nam</li>
          <li>Nước hoa nữ</li>
          <li>Nước hoa Unisex</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;