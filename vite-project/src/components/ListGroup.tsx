import ListItems from "./ListItems";

export default function ListGroup() {
  const items = [
    ["Sam", 17, "male"],
    ["Tom", 22, "male"],
  ];

  return (
    <>
      {items.map((item) => (
        <ListItems
          name={String(item[0])}
          age={Number(item[1])}
          sex={String(item[2])}
        />
      ))}
    </>
  );
}
