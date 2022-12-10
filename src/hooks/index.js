import React from "react";
import StoresContext from "../store/index";

export const useStores = () => React.useContext(StoresContext);