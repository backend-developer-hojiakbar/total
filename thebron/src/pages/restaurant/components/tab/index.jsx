import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTabComponent from "./components/AboutTabComponent";
import MenuTabComponent from "./components/MenuTabComponent";
import ReviewTabComponent from "./components/ReviewTabComponent";
import LikedTabComponent from "./components/LikedTabComponent";

const TabsComponent = ({ foodData }) => {
  return (
    <Tabs defaultValue="Menu" className="mt-10">
      <TabsList className="bg-primary text-white w-[420px]">
        <TabsTrigger
          className="w-full font-bold data-[state=active]:text-primary"
          value="Menu"
        >
          Menu
        </TabsTrigger>
        <TabsTrigger
          className="w-full font-bold data-[state=active]:text-primary"
          value="About"
        >
          About
        </TabsTrigger>
        <TabsTrigger
          className="w-full font-bold data-[state=active]:text-primary"
          value="Reviews"
        >
          Reviews
        </TabsTrigger>
        <TabsTrigger
          className="w-full font-bold data-[state=active]:text-primary"
          value="liked"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <defs>
              <mask id="ipSShoppingCartAdd0">
                <g fill="none">
                  <path fill="#fff" d="M39 32H13L8 12h36z" />
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
                  />
                  <circle
                    cx="13"
                    cy="39"
                    r="3"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                  />
                  <circle
                    cx="39"
                    cy="39"
                    r="3"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                  />
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M22 22h8m-4 4v-8"
                  />
                </g>
              </mask>
            </defs>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSShoppingCartAdd0)"
            />
          </svg>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Menu">
        <MenuTabComponent foodData={foodData} />
      </TabsContent>
      <TabsContent value="About">
        <AboutTabComponent />
      </TabsContent>
      <TabsContent value="Reviews">
        <ReviewTabComponent />
      </TabsContent>
      <TabsContent value="liked">
        <LikedTabComponent />
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
