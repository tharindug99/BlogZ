import React from "react";
import { Button } from "@/components/ui/button";

const sampleNews = [
  {
    id: 1,
    title: "New Study Shows Benefits of Pet Ownership",
    date: "July 1, 2024",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sapien ac lacinia feugiat.",
    image:
      "https://www.helpguide.org/wp-content/uploads/2023/02/Benefits-of-Pets.jpeg", // Example image URL
  },
  {
    id: 2,
    title: "Local Shelter Rescues Record Number of Animals",
    date: "June 28, 2024",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image:
      "https://images.aeonmedia.co/images/0bd4ba4f-8a60-4001-82fd-e1c47e8faf06/ESSAY-PA-21805359.jpg?width=3840&quality=75&format=auto", // Example image URL
  },
  {
    id: 3,
    title: "Tips for Keeping Your Pets Cool This Summer",
    date: "June 25, 2024",
    content:
      "Vestibulum ac velit id quam vestibulum ultrices nec non felis. Sed feugiat dui nec maximus tincidunt.",
    image:
      "https://www.drool.pet/cdn/shop/articles/shutterstock_1058762561_1280x720_ab0f53dc-4bfb-4dd1-a5b7-b25fd1998349.jpg?v=1571692016", // Example image URL
  },
];

function LatestNews() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold mb-20">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleNews.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{news.date}</p>
              <p className="text-sm">{news.content}</p>
              <div className="mt-5 bottom-2">
                <Button>Read more..</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
