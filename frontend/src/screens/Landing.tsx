import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = ()=>{
    const navigate = useNavigate();
    return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-8">
        <div className="flex justify-center">
            <img className="max-w-96" src="../../photo/chessBoard.png" alt="" />
        </div>
        <div className="w-3/5">
            <h1 className="text-4xl text-white font-bold">Play Chess Online on the #2 Site!</h1>
            <div className="mt-4 flex justify-between">
                <div className="flex gap-2">
                <div className="text-white">15,053,754</div>
                <div className="text-slate-400">Games Today</div>
                </div>
 justify-between                <div className="flex gap-2">
                <div className="text-white">182,729</div>
                <div className="text-slate-400">Playing Now</div>
                </div>

            </div>
            <br />
            <div className="flex flex-col gap-2">
                <Button onClick ={()=>{
                    navigate("/game")
                }}>
                    Play Online
                </Button>
                <button className="bg-slate-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">Play Computer</button>
            </div>
        </div>
    </div>
}