import "./HomePage.css";

export default function HomePage() {
  return (
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
            استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار
            أمريكي من خلال منصتنا.{" "}
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
            تمثل عضوية Assetify + فئة مستثمرين قيميين وتأتي مع مجموعة من المزايا
            الاستثنائية والخدمات المخصصة
          </div>
        </div>
      </section>
    </main>
  );
}
