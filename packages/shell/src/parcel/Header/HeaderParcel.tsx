import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from 'single-spa';
import { useMemo } from "react";


export default function HeaderParcel() {

  const config = useMemo(
    () => async () => {
      const module = await System.import("header-parcel");
      return module.default ?? module;
    },
    []
  );

  return (
    <Parcel
      config={config}
      mountParcel={mountRootParcel}
    />
  );
}
