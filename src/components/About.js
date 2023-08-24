import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-orange-100 min-h-screen p-2 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-4">
        <div className="w-3/5 flex flex-col justify-between items-center gap-8">
          <h1 className="p-8 font-bold font-primary text-3xl text-dark">
            <span className="px-2 block text-9xl text-primary">DineHub</span>
            Where convenience meets flavor, and every meal is a reason to smile!
          </h1>
          <p className="p-8 font-secondary text-xl text-dark text-justify">
            Craving pizza, sushi, burgers, or vegan cuisine, we've got you
            covered.Finding and ordering delicious food can sometimes be a
            hassle. That's why we provide you a platform that connects you with
            a wide variety of local restaurants.
          </p>
        </div>
      </div>

      <div className="mt-4 py-4 flex justify-around items-start gap-2">
        <div className="h-full py-2 px-4 w-1/4 font-primary font-bold bg-orange-200 flex flex-col justify-around items-center gap-2 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="p-2 font-secondary text-xl text-dark text-justify">
            Our mission is to make your dining experience effortless, enjoyable,
            and, memorable. Now, ordering food is just a few clicks away!
          </p>
        </div>

        <div className="h-full py-2 px-4 w-1/4 font-primary font-bold bg-orange-200 flex flex-col justify-around items-center gap-2 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="p-2 font-secondary text-xl text-dark text-justify">
            Browse through the extensive menus, discover new eateries, and
            customize your orders to your heart's content.
          </p>
        </div>

        <div className="h-full py-2 px-4 w-1/4 font-primary font-bold bg-orange-200 flex flex-col justify-around items-center gap-2 rounded-lg hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="p-2 font-secondary text-xl text-dark text-justify">
            Not just about food. We create a delightful experience from start to
            finish.Your satisfaction, our top priority.
          </p>
        </div>
      </div>

      <Link to="/">
        <h1 className="w-fit mt-8 mx-auto p-4 font-primary text-2xl text-white bg-orange-400 rounded-lg hover:bg-white hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:text-primary">
          Explore nearby Restaurants with DineHub
        </h1>
      </Link>
    </div>
  );
};

export default About;
