import { CalendarBlankIcon, DoorOpenIcon, WifiIcon } from "@/assets/icons";
import React from "react";

const AboutTabComponent = () => {
  const textRef = React.useRef(null);
  const [expanded, setExpanded] = React.useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div mt="40px">
      <div flex items-center gap="16px">
        <img
          className="rounded-full"
          src="https://via.placeholder.com/60x60"
          alt="user img"
          w="60px"
          h="60px"
        />
        <div>
          <h6 text="18px" font="700">
            Хозяин: Grigory Ishuk
          </h6>
          <p text="16px" mt-1 font="400px">
            5 лет принимает гостей
          </p>
        </div>
      </div>
      <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>
      <div flex flex-col gap="16px">
        <div flex items-center gap="16px">
          <WifiIcon />
          <div>
            <h6 text="18px" font="700">
              Быстрый Wi-Fi{" "}
            </h6>
            <p mt-1 text="16px" font="400">
              На скорости 235 Мбит/с вы можете принимать видео звонки и
              транслировать видео для всей группы
            </p>
          </div>
        </div>
        <div flex items-center gap="16px">
          <CalendarBlankIcon />
          <h6 text="18px" font="700">
            Беспоатная отмена в течение 48 часов
          </h6>
        </div>
        <div flex items-center gap="16px">
          <DoorOpenIcon />
          <div>
            <h6 text="18px" font="700">
              Самостоятельное прибытие{" "}
            </h6>
            <p mt-1 text="16px" font="400">
              Вы заселитесь самостоятельно на двери умный звонок
            </p>
          </div>
        </div>
      </div>
      <div mt="40px">
        <p
          ref={textRef}
          className={expanded ? "" : "line-clamp-4"}
          style={{ fontSize: "18px", fontWeight: 400 }}
        >
          Your long content goes here Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque molestiae suscipit quaerat pariatur explicabo
          id blanditiis modi minima nihil unde nam corrupti vitae natus velit
          ratione facere sed laborum aliquam, dolores cum. Illum fugit numquam
          deserunt dicta magni ea in, voluptatibus esse aut illo accusantium,
          dolores ipsum blanditiis labore quos, autem culpa ut soluta accusamus
          cupiditate? Quia, aspernatur consectetur temporibus laborum beatae cum
          asperiores soluta vero illum officiis voluptate esse odio neque, velit
          deserunt, excepturi amet itaque autem repudiandae iure quae? Facilis
          laboriosam quas necessitatibus incidunt, obcaecati alias quidem itaque
          vero dignissimos eius consectetur fugiat, doloribus delectus nisi et
          exercitationem!
        </p>
        <button
          onClick={toggleReadMore}
          className="flex items-center justify-center gap-4 mt-4 text-lg font-bold underline"
        >
          {expanded ? "Скрыть" : "Показать ещё"}
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.43 10.4422L11.1605 16.6922C11.0837 16.7503 10.9925 16.7963 10.8921 16.8278C10.7917 16.8592 10.6841 16.8754 10.5755 16.8754C10.4668 16.8754 10.3592 16.8592 10.2588 16.8278C10.1584 16.7963 10.0672 16.7503 9.99039 16.6922C9.91356 16.6341 9.85261 16.5652 9.81103 16.4893C9.76945 16.4135 9.74805 16.3321 9.74805 16.25C9.74805 16.1679 9.76945 16.0866 9.81103 16.0107C9.85261 15.9348 9.91356 15.8659 9.99039 15.8078L17.6759 10L9.99039 4.1922C9.83522 4.07492 9.74805 3.91586 9.74805 3.75001C9.74805 3.58416 9.83522 3.4251 9.99039 3.30782C10.1456 3.19055 10.356 3.12466 10.5755 3.12466C10.7949 3.12466 11.0054 3.19055 11.1605 3.30782L19.43 9.55782C19.5069 9.61587 19.5679 9.6848 19.6095 9.76067C19.6511 9.83655 19.6726 9.91788 19.6726 10C19.6726 10.0821 19.6511 10.1635 19.6095 10.2393C19.5679 10.3152 19.5069 10.3842 19.43 10.4422Z"
              fill="#343330"
            />
          </svg>
        </button>
      </div>
      <div w="100%" h="1px" bg="#EDEDED" my="40px"></div>
    </div>
  );
};

export default AboutTabComponent;
