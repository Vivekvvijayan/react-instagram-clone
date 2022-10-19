import MiniProfile from "./MiniProfile";
import SuggestionComponent from "./SuggestionComponent";
import { faker } from "@faker-js/faker";

function Suggection() {
  return (
    <div className=" h-[450px] w-[350px]">
      {/* profile compoenet */}

      <div className="">
        <MiniProfile profileImage={faker.image.avatar()} uname={faker.name.firstName()} fname={faker.name.fullName()} />
      </div>
      {/* profile compoenet */}

      <div className="flex flex-col justify-between mt-3">
        <div className="flex justify-between mt-3 items-center">
          <p className="text-lg text-slate-500 font-semibold">
            Suggestions for you
          </p>
          <p className="text-base text-black font-semibold">See All</p>
        </div>
        <SuggestionComponent
          name={faker.name.firstName()}
          email={faker.name.fullName()}
          profileImage={faker.image.avatar()}
        />
        <SuggestionComponent
          name={faker.name.firstName()}
          email={faker.name.fullName()}
          profileImage={faker.image.avatar()}
        />
        <SuggestionComponent
          name={faker.name.firstName()}
          email={faker.name.fullName()}
          profileImage={faker.image.avatar()}
        />
        <SuggestionComponent
          name={faker.name.firstName()}
          email={faker.name.fullName()}
          profileImage={faker.image.avatar()}
        />
      </div>
    </div>
  );
}

export default Suggection;
