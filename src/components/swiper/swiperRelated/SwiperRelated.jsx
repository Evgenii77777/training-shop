import React, { useEffect } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../style.css";
import styles from "../../relatedProducts/RelatedProducts.module.css";
import OneStar from "../../stars/oneStar/OneStar";
import TwoStars from "../../stars/twoStar/TwoStars";
import ThreeStars from "../../stars/threeStars/ThreeStars";
import FourStars from "../../stars/fourStars/FourStars";
import FiveStars from "../../stars/fiveStars/FiveStars";
import ZeroStars from "../../stars/zeroStar/ZeroStars";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../redux/thunk/getAllProducts";

const SwiperRelated = ({ name, card }) => {
  let sumReviews = 0;
  card.reviews.forEach((el) => {
    return (sumReviews += el.rating);
  });
  sumReviews = Math.round(sumReviews / card.reviews.length);
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.items.products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <Swiper
      className="swiperNew"
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      breakpoints={{
        1023: {
          slidesPerView: 4,
        },
        740: {
          slidesPerView: 3,
        },
        501: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }}
      data-test-id="related-slider"
    >
      {allProducts.length !== 0 &&
        allProducts[name].map((el) => (
          <SwiperSlide className="newSlide" key={el.images[0]?.url}>
            <li>
              <img
                src={`https://training.cleverland.by/shop${el.images[0]?.url}`}
                alt="clothes"
                className="imagesRelated"
              />
              <p className={styles.relText}>{name}'s tracksuit Q109`</p>
              <div className={styles.relatedContainer}>
                <span>$ {el.price}</span>
                {el.discount && (
                  <span className={styles.darkSpan}> {el.discount}</span>
                )}
                <div className={styles.relContainer}>
                  {el.rating === 1 ? (
                    <OneStar className={styles.rel} />
                  ) : "" || el.rating === 2 ? (
                    <TwoStars className={styles.rel} />
                  ) : "" || el.rating === 3 ? (
                    <ThreeStars className={styles.rel} />
                  ) : "" || el.rating === 4 ? (
                    <FourStars className={styles.rel} />
                  ) : "" || el.rating === 5 ? (
                    <FiveStars className={styles.rel} />
                  ) : (
                    <ZeroStars className={styles.rel} />
                  )}
                </div>
              </div>
            </li>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperRelated;
