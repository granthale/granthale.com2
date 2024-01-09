import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Seeds() {
  return (
    <>
      <Header page="seeds" />
      <Layout>
        <div className="flex flex-col md:flex-row p-5 w-full h-auto relative z-20 min-h-screen">
          <div className="w-full md:w-1/3 top-5 h-auto self-start md:sticky hidden md:block">
            <h1 className="text-3xl font-bold text-blue">Entry Points</h1>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </div>
          <div className="w-full flex flex-wrap p-30 lg:pt-0">
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">
              Hello there my dear friend
            </p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-5 w-full h-auto relative z-20 min-h-screen">
          <div className="w-full md:w-1/3 top-5 h-auto self-start md:sticky">
            <h1 className="text-3xl font-bold text-blue">People</h1>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </div>

          <div className="w-full flex flex-wrap p-30 lg:pt-0">
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">
              Hello there my dear friend
            </p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
            <p className="w-1/2 lg:w-1/3 md:w-1/2 p-6 ">Hello</p>
          </div>
        </div>

        <div
          id="dynamicDiv"
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "2px",
            height: "0%", // Consider adjusting this value
            backgroundColor: "rgb(37, 99, 235)",
            zIndex: 9999,
          }}
        ></div>
        <div>
          <h1 className="text-blue font-bold text-3xl">Seeds</h1>
        </div>
      </Layout>
    </>
  );
}

// window.addEventListener("scroll", function () {
//   var scrollPercentage =
//     (document.documentElement.scrollTop + document.body.scrollTop) /
//     (document.documentElement.scrollHeight -
//       document.documentElement.clientHeight);
//   var divHeight = scrollPercentage * 100;
//   document.getElementById("dynamicDiv").style.height = divHeight + "%";
// });
