import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Breadcrumb = ({ paths }) => {
  const { t } = useTranslation();
  paths = paths?.filter((item) => item !== "");

  return (
    <div className="flex gap-2">
      {paths?.map((item, index) => (
        <div className="flex items-center gap-2" key={index}>
          <Link className="font-medium text-base">{t(item)}</Link>
          {paths.length - 1 !== index && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.187 12L7.47 4.285q-.221-.221-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .532.221l7.636 7.643q.242.242.354.54t.111.596t-.111.596t-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532t.221-.531z"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
