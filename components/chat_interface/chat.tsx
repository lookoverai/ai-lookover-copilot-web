export default function Chat() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="flex bg-muted/50 rounded-xl p-4 flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <textarea className="w-2xl bg-red-500" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <button className="bg-blue-500 text-white p-2 rounded-md">Send</button>
            </div>
        </div>
    </div>
  )
}