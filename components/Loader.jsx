import React from "react";
import { Spinner } from "@nextui-org/spinner";

export const Loader = () => {
  return (
    <Spinner
      label="Please wait,Loading..."
      color="warning"
      labelColor="warning"
      size="lg"
      className="w-full h-full space-y-8 font-RobotoSlab bg-primary p-3.5 sm:px-16 sm:py-10"
    />
  );
};
