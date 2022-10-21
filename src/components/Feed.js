import Posts from "./Posts";
import Stories from "./Stories";
import Suggection from "./Suggection";

function Feed() {
  return (
    <div className=" p-3 lg:p-0 flex justify-center min-h-screen h-auto w-full lg:mt-16 sm:mt-2">

      <div className="flex w-full lg:w-3/5 justify-between">
        <section className=" w-full lg:w-3/5">
         
            <Stories />
         
          <Posts />
        </section>

        <Suggection />
      </div>
    </div>
  );
}

export default Feed;
