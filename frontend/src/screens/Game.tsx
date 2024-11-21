import { ChessBoard } from "../components/ChessBoard.tsx"
import { WPlayerCard, BPlayerCard } from "../components/playerCard.tsx";
import { Button } from "../components/Button.tsx"
import { useSocket } from "../hooks/useSocket.ts";
import { useEffect, useState } from "react";
import { Chess, Color, PieceSymbol } from "chess.js"

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

export const Game = ()=>{
    const socket = useSocket();
    const [chess, setChess ] = useState(new Chess())
    const [board, setBoard] = useState(chess.board());
    const [started, setStarted] = useState(false);
    const [turn, setTurn] = useState("");
    const [Wtime, setWTime] = useState(600);
    const [Btime, setBTime] = useState(600);
    const [isRunning, setisRunning] = useState(false);
    const [capturePieces, setCapturePieces] = useState<{ piece: PieceSymbol; color: Color }[]>([]); 

    useEffect(()=>{
         let timer: number | undefined;
         if (started) {
            timer = setInterval(() => {
              setWTime((prevTime) => (isRunning ? prevTime - 1 : prevTime));
              setBTime((prevTime) => (!isRunning ? prevTime - 1 : prevTime));
            }, 1000);
          }

         return ()=>clearInterval(timer);
    },[isRunning,started]);

    useEffect(()=>{
         const moves = chess.moves({verbose : true});
         const captured = moves
    .filter((move) => move.flags === "c")
    .map((move) => ({ piece: move.piece, color: move.color }));

    setCapturePieces(captured);
    },[turn, chess])

    useEffect(()=>{
        setisRunning(turn === "w");
    },[turn])

    useEffect(()=>{
        if(!socket){
            return;
        }
        socket.onmessage = (event) =>{
            const message = JSON.parse(event.data);
            console.log(message);
            switch(message.type) {
                case INIT_GAME:
                    setBoard(chess.board());
                    setStarted(true);
                    setTurn(chess.turn());
                    setisRunning(true);  // Start the timer
                    console.log("Game initialized");
                    break;
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    setTurn(chess.turn());
                    console.log("Move made");
                    break;
                case GAME_OVER:
                    console.log("Game over");
                    break;        
            }
        }
    }, [socket]);

    if(!socket) return <div>Connecting....</div>


    return <div className="justify-center flex">
        <div className="pt-8 max-w-screen-lg w-full">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            <div className="col-span-3 flex justify-center flex-col gap-2 w-ful">
                <BPlayerCard time={Btime} pieces={capturePieces} ></BPlayerCard>
                <ChessBoard chess={chess} setBoard={setBoard} socket={socket} board={board} setTurn={setTurn}></ChessBoard>
                <WPlayerCard time={Wtime} pieces={capturePieces}></WPlayerCard>
            </div>
            <div className="col-start-5 col-span-2 bg-green-200 w-full flex justify-center">
                <div className="pt-8 flex flex-col gap-2">
                {!started &&<Button onClick={()=>{ //play button will be remove on started
                    socket.send(JSON.stringify({
                        type: INIT_GAME
                    }))
                }}>
                    Play
                </Button>}
                {started && <button className={`font-bold py-2 px-4 rounded-xl ${turn == "w" ? "bg-white text-black": "bg-black text-white"}`}>{turn == "w" ? "White Turn" : "Black Turn"}</button>}
                </div>
            </div>
            </div>
        </div>
    </div>
}