export default function DetailOverview(props: any) {
  const { data } = props;
  return (
    <div className="w-full bg-[#222] flex flex-col mt-6 rounded-md relative rounded-tr-[56px] rounded-br-[56px]">
      <ul className="mx-7 my-5 flex flex-col gap-3 text-white ">
        <li className="flex flex-row text-white">
          <div className="opacity-70 w-28">Players</div>
          <div>{data?.participantNumber}</div>
        </li>
        <li className="flex flex-row text-white">
          <div className="opacity-70 w-28">Format</div>
          <div>{data?.format}</div>
        </li>
        <li className="flex flex-row text-white">
          <div className="opacity-70 w-28">Game</div>
          <div>Badminton</div>
        </li>
        <li className="flex flex-row text-white">
          <div className="opacity-70 w-28">Create At</div>
          <div>{data?.createAt}</div>
        </li>
      </ul>
      <div className="absolute right-0 top-0 bg-[#484848] rounded-full flex flex-col justify-center items-center px-6 py-4">
        <div className="text-white opacity-70">organized by</div>
        <div className="text-[#F17D3D]">{data?.owner}</div>
      </div>
    </div>
  );
}