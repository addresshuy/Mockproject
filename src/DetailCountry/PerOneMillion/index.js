import React from "react";
import { useTranslation } from "react-i18next";
import "./PreOneMilliion.scss";

function PerOneMillion({ detailCountry }) {
  const { t } = useTranslation();
  const { casesPerOneMillion, deathsPerOneMillion, recoveredPerOneMillion } =
    detailCountry;

  return (
    <div className="detail__peronemillion">
      <div className="mod">
        <div className="detail__case">
          <p>{t("Detail.PerOneMillion.Case")}</p>
          <span>{casesPerOneMillion}</span>
          <p>{t("Detail.PerOneMillion.Unit")}</p>
        </div>
        <div className="detail__recover">
          <p>{t("Detail.PerOneMillion.Recovere")}</p>
          <span>{recoveredPerOneMillion}</span>
          <p>{t("Detail.PerOneMillion.Unit")}</p>
        </div>

        <div className="detail__death">
          <p>{t("Detail.PerOneMillion.Death")}</p>
          <span>{deathsPerOneMillion}</span>
          <p>{t("Detail.PerOneMillion.Unit")}</p>
        </div>
      </div>
    </div>
  );
}

export default PerOneMillion;
