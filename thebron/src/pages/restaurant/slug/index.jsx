import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const RestaurantSlug = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  return (
    <div>
      <p>RestaurantSlug {id}</p>
    </div>
  );
};

export default RestaurantSlug;
