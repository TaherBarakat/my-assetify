import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong!";
  // if (error.status===500){
  //   message=error.data.message
  // }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  console.log(error);
  console.log(error);
  console.log(error);

  return (
    <>
      <MainNavigation />
      <div className="pt-10 text-center">
        <h1 className="text-[5rem] ">{title}</h1>
        <p>{message}</p>
      </div>
      ;
    </>
  );
}
