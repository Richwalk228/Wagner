import { NavLink } from "react-router";
import {
  HomeIcon,
  ArrowLeftEndOnRectangleIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <>
      {/* <div className="rd-navbar-wrap" style={{height: 135 }}>
        <nav
          className="rd-navbar rd-navbar-minimal rd-navbar-original rd-navbar--is-stuck rd-navbar-fixed"
          data-layout="rd-navbar-fixed"
          data-lg-device-layout="rd-navbar-static"
          data-lg-layout="rd-navbar-static"
          data-lg-stick-up="true"
          data-lg-stick-up-offset="40px"
          data-md-device-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-static"
          data-md-stick-up="true"
          data-md-stick-up-offset="40px"
          data-sm-layout="rd-navbar-fixed"
          data-sm-stick-up="true"
          data-stick-up="true"
        >
          <div className="rd-navbar-inner">
            <div className="rd-navbar-panel">
              <button
                className="rd-navbar-toggle toggle-original"
                data-rd-navbar-toggle=".rd-navbar-nav-wrap"
              ></button>

              <div className="rd-navbar-brand">
                <a className="brand-name" href="index.html">
                  <img
                    alt=""
                    height="55"
                    src="images/logo`wagner2019`55.jpg"
                    width="61"
                  />
                </a>
                <img alt="" height="55" src="./Wagner-logo.jpg" width="203" />
              </div>
            </div>

            <div className="rd-navbar-aside-center">
              <div className="rd-navbar-nav-wrap toggle-original-elements">
                <ul>
                  <li className="active">
                    <a href="index.html">HOME</a>
                  </li>
                  <li>
                    <a
                      href="https://apply.wagner-financial.com"
                      target="_blank"
                    >
                      APPLY NOW
                    </a>
                  </li>
                  <li>
                    <a href="locations.html">LOCATIONS</a>
                  </li>
                  <li>
                    <a
                      href="https://secure.wagner-financial.com"
                      target="_blank"
                    >
                      MY ACCOUNT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wagner-financial.repay.io/checkout/#/checkout-form/789311c6-396c-4357-ac62-8d11f0fad4ad"
                      target="_blank"
                    >
                      ONE TIME PAYMENT
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">CONTACT US</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div> */}

      <nav className="">
 <img src="./Wagner-logo.jpg" alt="" />
<ul className="nav-List">
<li>
<NavLink to='/'
className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
<HomeIcon className="homeIcon"/>
</NavLink>
</li>
<br/>
<li className="LoginItem">
    <NavLink to="/login"
    className={({ isActive }) => (isActive ? undefined : 'notActive')}>
        <ArrowLeftEndOnRectangleIcon className="logout"/>
    </NavLink>
</li>
<li >
    <NavLink to="/locations"
    className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
        <MapPinIcon className="Mappin"/>

    </NavLink>
</li>
<NavLink to="/ApplyNow"
className={({ isActive }) => (isActive ? 'active' : 'notActive')}>
<span className="applyNow">apply</span>
</NavLink>
</ul>
</nav>
    </>
  );
}

export default Navbar;
