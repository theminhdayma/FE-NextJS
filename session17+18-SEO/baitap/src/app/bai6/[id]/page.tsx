import Breadcrumbs from "@/app/bai7/page";
import React from "react";
type PropTypes = {
  params: {
    id: string;
  };
};
export default function id({ params }: PropTypes) {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <div>post id: {params.id}</div>
    </>
  );
}
