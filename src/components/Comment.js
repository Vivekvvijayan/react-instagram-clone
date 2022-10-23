import Moment from "react-moment";

function Comment({ c_image, username, time, comment }) {
  return (
    <span className=" lg:justify-between flex justify-between items-center">
      <span className="flex lg:space-x-3 max-w-[70%] items-center">
        <img src={c_image} alt="" className="h-4 lg:h-7 rounded-full" />
        <p className="text-xs lg:text-sm lg:min-w-[200px]  max-w-[90%] m-2">
          <span className=" text-[10px] lg:w-auto font-bold mr-2 lg:text-[13px]">
            {username}
          </span>
          {comment}
        </p>
      </span>

      <p className="font-light text-[10px] lg:text-xs lg:mr-2">
        <Moment fromNow interval={1000}>
          {new Date(time.seconds * 1000)}
        </Moment>
      </p>
    </span>
  );
}

export default Comment;
