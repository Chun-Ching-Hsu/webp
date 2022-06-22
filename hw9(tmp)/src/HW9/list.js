import Item from "./item";

const List = ({ listData, deleteData, state }) => {
  return (
    <div className="lsit">
      {listData.map((item) => {
        const { note, date, time, id, status} = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            status={status}
            deleteData={deleteData}
            finishData={state}
          />
        );
      })}
    </div>
  );
};

export default List;
