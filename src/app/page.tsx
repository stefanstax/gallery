import Link from "next/link";

const mockUrls = [
  "https://qffw4y8mtr.ufs.sh/f/iaBoe3YPi7CRV01imYGPqN4gRQyI2j9JivufE3MnZdBkL8xt",
  "https://qffw4y8mtr.ufs.sh/f/iaBoe3YPi7CR2EKqG0BvF8x39TPSzAn5lkQj0eLWgpHbhDcB",
  "https://qffw4y8mtr.ufs.sh/f/iaBoe3YPi7CR51Mw5W6mOLQxyDlaw0BbMFKiYe4kG7XArvW1",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="ga;p4 flex flex-wrap gap-4">
        {mockImages.map((image) => {
          return (
            <div key={image.id} className="w-48">
              <img src={image.url} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
