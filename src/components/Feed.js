import Posts from "./Posts";
import Stories from "./Stories";
import Suggection from "./Suggection";

function Feed() {
  return (
    <div className="flex justify-center min-h-screen h-auto w-full mt-16">

      <div className="flex w-3/5 justify-between">
        <section className="w-3/5">
         
            <Stories />
         
          <Posts />
        </section>

        <Suggection />
      </div>
    </div>
  );
}

export default Feed;
