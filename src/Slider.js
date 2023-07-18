import React, { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    const upBtn = document.querySelector(".up-button");
    const downBtn = document.querySelector(".down-button");
    const sidebar = document.querySelector(".sidebar");
    const container = document.querySelector(".containerbox");
    const mainSlide = document.querySelector(".main-slide");

    if (!upBtn || !downBtn || !sidebar || !container || !mainSlide) {
      // 요소들 중 하나라도 찾을 수 없을 경우, 오류 처리 또는 초기화 로직을 수행
      return;
    }

    const slideCount = mainSlide.querySelectorAll("div").length;
    let activeSlideIndex = 0;

    sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

    const changeSlide = (direction) => {
      if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex === slideCount) {
          activeSlideIndex = 0;
        }
      } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = slideCount - 1;
        }
      }
      const height = container.clientHeight;

      mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
      sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
    };

    upBtn.addEventListener("click", () => {
      changeSlide("up");
    });

    downBtn.addEventListener("click", () => {
      changeSlide("down");
    });

    return () => {
      upBtn.removeEventListener("click", () => {
        changeSlide("up");
      });

      downBtn.removeEventListener("click", () => {
        changeSlide("down");
      });
    };
  }, []);

  return null;
};

export default Slider;
