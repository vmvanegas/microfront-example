import HeaderParcel from "../../parcel/Header/HeaderParcel";
import "./ShellLayout.scss";

export default function ShellLayout() {
  return (
    <>
      <div className="layout">
        <div className="header">
          <HeaderParcel />
        </div>
        <div className="microfrontends">
          <div id="single-spa-application:my-microfrontend" />
        </div>
      </div>
    </>
  );
}
