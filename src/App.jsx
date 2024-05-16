import "./App.css";
import Header from "./components/Header";
import Popup from "./components/Popup";
function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col ">
        <section className="black-gradient flex  h-[80vh] items-start justify-center p-10">
          <div className="flex flex-col items-center justify-center md:w-[45%] ">
            <div className="container m-5    text-center text-secondary-accent ">
              أحصل على الإقامة التركية بكل سهولة مع Assetify{" "}
            </div>
            <div className="container m-5 text-center text-4xl  text-primary-lighter ">
              استثمر من أي مكان في العالم واحصل على الإقامة التركية
            </div>
            <div className="container  m-5   text-center text-secondary-accent ">
              استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000
              دولار أمريكي من خلال منصتنا.{" "}
            </div>
          </div>
        </section>

        {/* xxxxxxxxxxxxxxxxxx */}

        <section className=" flex  h-[35vh] items-start justify-center bg-primary-darker p-10">
          <div className="flex flex-col items-center justify-center md:w-[60%] ">
            <div className="container m-5 text-center text-4xl  text-primary-lighter ">
              قم بالإرتقاء تلقائياً إلى فئة Assetify +{" "}
            </div>
            <div className=" container m-5 text-center   text-secondary-accent ">
              تمثل عضوية Assetify + فئة مستثمرين قيميين وتأتي مع مجموعة من
              المزايا الاستثنائية والخدمات المخصصة
            </div>
          </div>
        </section>
      </main>
      <Popup></Popup>
    </>
  );
}

export default App;
{
  /* <h1 id="bold" className="text-3xl font-bold bg-secondary ">
                    {" "}
                    تسجيل الدخول{" "}
               </h1>
               <h1 id="light" className="text-3xl   bg-secondary ">
                    تسجيل الدخول
               </h1>
               <h1 className="text-3xl font-bold bg-secondary-accent">مرحبا</h1>
               <h1 className="text-3xl  bg-primary-light">تسجيل دخول</h1>
               <h1 className="  bg-primary-lighter">مرحبا</h1>
               <h1 className="text-3xl  bg-primary-dark">مرحبا</h1>
               <h1 className="text-3xl  bg-primary-darker">مرحبا</h1> */
}
