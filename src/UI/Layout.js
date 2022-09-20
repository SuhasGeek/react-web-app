import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <div className="cover-container d-flex  p-3 mx-auto flex-column">
        {/* <header className="masthead">
          <div className="inner">
            <h3 className="masthead-brand">RAS Web</h3>
          </div>
        </header> */}

        <main role="main" className="inner cover">
          {props.children}
        </main>

        {/* <footer className="mastfoot mt-auto">
          <div className="inner">
            <p></p>
          </div>
        </footer> */}
      </div>
    </Fragment>
  );
};

export default Layout;
