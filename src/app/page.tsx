import { db } from "~/server/db";

export const dynnamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="ga;p4 flex flex-wrap gap-4 text-white">
        {[...images].map((image, index) => {
          return (
            <div
              key={image.id + "-" + index}
              className="flex w-48 flex-col gap-2"
            >
              <img
                src={image.url}
                className="h-[200px] w-[200px] rounded-lg object-cover"
              />
              <p>{image.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
